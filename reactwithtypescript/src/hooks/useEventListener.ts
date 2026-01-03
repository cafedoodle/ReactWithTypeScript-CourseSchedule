// src/hooks/useEventListener.ts
import { useEffect, useRef } from "react";

type EventMap = HTMLElementEventMap & WindowEventMap & DocumentEventMap;

export function useEventListener<
  K extends keyof EventMap,
  T extends HTMLElement | Document | Window = Window
>(eventName: K, handler: (event: EventMap[K]) => void, element?: T | null) {
  const savedHandler = useRef<((event: EventMap[K]) => void) | null>(null);

  // Update ref if handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const target = element ?? window;
    if (!target || !target.addEventListener) return;

    const listener = (event: EventMap[K]) => {
      savedHandler.current?.(event);
    };

    target.addEventListener(eventName, listener as EventListener);
    return () =>
      target.removeEventListener(eventName, listener as EventListener);
  }, [eventName, element]);
}

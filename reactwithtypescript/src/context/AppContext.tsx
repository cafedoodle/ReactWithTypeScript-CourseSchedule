/**
 * AppContext.tsx
 * ----------------
 * - This file exports `AppProvider`, a React Context Provider component that wraps parts
 *   of the app which need access to the shared state.
 * - `useReducer` is used to manage state (keeps reducer logic in `AppContextData.ts`).
 * - The provider passes down the `state` (e.g., `courses`, `Location`) and the `dispatch` function
 *   so child components can dispatch typed actions to update the shared state.
 *
 * TypeScript notes:
 * - `React.FC<{ children: React.ReactNode }>` types the component and its `children` prop.
 * - `dispatch` comes from `useReducer` and is typed via the `Action` union in `AppContextData.ts`.
 */
import React, { useReducer } from "react";
//import type { ReactNode } from "react";
import { AppContext, AppReducer, initialState } from "./AppContextData";

// 3. Provider component - wraps the components we want to give access to the state
// AppProvider: wraps children and provides access to app state via `AppContext`.
// - `useReducer(AppReducer, initialState)` returns `[state, dispatch]` where `dispatch` accepts typed actions.
// - The provider's `value` passes only what consumers need (`courses`, `Location`, `dispatch`).
// Tip: `React.FC<{ children: React.ReactNode }>` types the component and its `children` prop; some teams prefer explicit prop types instead of `React.FC`.
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 4. Sets up the app state: takes a reducer and an initial state
  // Set up reducer state: `state` holds current state, `dispatch` sends typed actions to the reducer.
  // dispatch send actions to the reducer, which updates the state based on the action type and payload.
  // state is the updated state of the app after the reducer has processed the action, and dispatch is a function that sends actions to the reducer.
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Provide consumers with only the values they need (avoid passing the entire state object when not necessary).
  return (
    <AppContext.Provider
      value={{
        courses: state.courses,
        dispatch,
        Location: state.Location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

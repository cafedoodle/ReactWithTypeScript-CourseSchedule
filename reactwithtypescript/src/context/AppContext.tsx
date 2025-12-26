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
import React, { useReducer, useEffect } from "react";
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

  // Mimic loading data from an API by reading from memory (simulated delay)
  useEffect(() => {
    let alive = true;
    async function load() {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (alive) {
        // Load data from a simulated source
        const storedData = {
          courses: [
            { id: "Math", name: "Math", quantity: 1, credithour: 3 },
            { id: "English", name: "English", quantity: 1, credithour: 3 },
            { id: "Biology", name: "Biology", quantity: 1, credithour: 6 },
            { id: "Music", name: "Music", quantity: 1, credithour: 6 },
            { id: "Art", name: "Art", quantity: 1, credithour: 3 },
          ],
          Location: "AUS",
        };

        // Dispatch actions to set the loaded data into state
        dispatch({ type: "SET_COURSES", payload: storedData.courses });
        dispatch({ type: "CHG_LOCATION", payload: storedData.Location });
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, []);

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

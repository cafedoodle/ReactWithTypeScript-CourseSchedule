/**
 * AppContextData.ts
 * -----------------
 * Short explanations:
 * - TypeScript: static types (interfaces, type unions) help catch errors at compile time and document intent.
 * - React Context API: provides app-level state to components without prop-drilling (pass values down the tree implicitly).
 * - useReducer pattern: centralizes state updates with a reducer function and typed actions; good for medium-complexity state.
 *
 * Exports in this file:
 * - Interfaces `Course` and `State` that define the shape of our data
 * - `Action` union type describing all allowed actions and payloads for the reducer
 * - `AppReducer`: a pure function that returns the next state for each action
 * - `initialState`: the default state when the app starts
 * - `AppContext`: a typed context so consumers get correct types for `courses`, `Location`, and `dispatch`
 *
 */
import { createContext } from "react";
import type { Dispatch } from "react";

// Course: basic unit of state representing an available course.
// - `id`: unique identifier (string). In this sample repo ids are simple names.
// - `name`: display name shown in UI.
// - `quantity`: how many of the course the user selected (acts like a cart quantity).
// - `credithour`: metadata (number) representing credit hours for the course.
export interface Course {
  id: string;
  name: string;
  quantity: number;
  credithour: number;
}

// State: top-level shape of our context state
// - `courses`: array of Course entries
// - `Location`: a string used in the app to show a location string.
export interface State {
  courses: Course[];
  Location: string;
}

// Action: a discriminated union of all actions the reducer accepts.
// Using a union type lets TypeScript ensure we only dispatch valid actions with the correct payload shape.
export type Action =
  | { type: "ADD_QUANTITY"; payload: { name: string; quantity: number } }
  | { type: "RED_QUANTITY"; payload: { name: string; quantity: number } }
  | { type: "DELETE_ITEM"; payload: { name: string } }
  | { type: "CHG_LOCATION"; payload: string }
  | { type: "SET_COURSES"; payload: Course[] }
  | { type: "DONE" };

// 5. The reducer - this is used to update the state, based on the action
// Reducer: a pure function that returns the next State based on the incoming Action.
// - Reducers must not mutate their inputs. Instead, they return a new state object (immutability).
// - The discriminated union `Action` lets TypeScript narrow the shape in each `case` branch.
export const AppReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_QUANTITY": {
      // Increase the `quantity` of the course matching `name` by `quantity`.
      const { name, quantity } = action.payload;
      const courses = state.courses.map((course) =>
        course.name === name
          ? { ...course, quantity: course.quantity + quantity }
          : course
      );
      return { ...state, courses };
    }
    case "RED_QUANTITY": {
      // Reduce quantity but never drop below 0.
      const { name, quantity } = action.payload;
      const courses = state.courses.map((course) =>
        course.name === name
          ? { ...course, quantity: Math.max(course.quantity - quantity, 0) }
          : course
      );
      return { ...state, courses };
    }
    case "DELETE_ITEM": {
      // "Delete" sets the course's quantity to 0 while keeping the course entry.
      const { name } = action.payload;
      const courses = state.courses.map((course) =>
        course.name === name ? { ...course, quantity: 0 } : course
      );
      return { ...state, courses };
    }
    case "CHG_LOCATION": {
      // Update the `Location` string
      return {
        ...state,
        Location: action.payload,
      };
    }
    case "SET_COURSES": {
      // Set the `courses` array to the provided payload.
      return { ...state, courses: action.payload };
    }
    default:
      // Unknown actions should return current state unchanged.
      return state;
  }
};

// 1. Sets the initial state when the app loads
// initialState: sample data used when the app first loads. In a real app this might come from an API or persisted storage.
// export const initialState: State = {
//   courses: [
//     { id: "Math", name: "Math", quantity: 1, credithour: 3 },
//     { id: "English", name: "English", quantity: 1, credithour: 3 },
//     { id: "Biology", name: "Biology", quantity: 1, credithour: 6 },
//     { id: "Music", name: "Music", quantity: 1, credithour: 6 },
//     { id: "Art", name: "Art", quantity: 1, credithour: 3 },
//   ],
//   Location: "AUS", // used as a location string in this sample app
// };

export const initialState: State = {
  courses: [],
  Location: "", // used as a location string in this sample app
};

// AppContextType: the shape of the value provided by the context.
// Typing `dispatch` as `Dispatch<Action>` ensures consumers can only dispatch valid actions.
export interface AppContextType {
  courses: Course[];
  Location: string;
  dispatch: Dispatch<Action>;
}

// 2. Creates the context this is the thing our components import and use to get the state
// AppContext: a React Context carrying app-level state and the dispatch function.
// The default value here is only used if a consumer is rendered outside a matching Provider.
export const AppContext = createContext<AppContextType>({
  courses: initialState.courses,
  Location: initialState.Location,
  // A no-op dispatch stub for the default context value; the real dispatch is provided by the AppProvider.
  dispatch: (() => undefined) as Dispatch<Action>,
});

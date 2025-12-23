import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_courses = [];
  switch (action.type) {
    case "ADD_QUANTITY":
      let updatedqty = false;
      state.courses.map((course) => {
        if (course.name === action.payload.name) {
          course.quantity = course.quantity + action.payload.quantity;
          updatedqty = true;
        }
        new_courses.push(course);
        return true;
      });
      state.courses = new_courses;
      action.type = "DONE";
      return {
        ...state,
      };

    case "RED_QUANTITY":
      state.courses.map((course) => {
        if (course.name === action.payload.name) {
          course.quantity = course.quantity - action.payload.quantity;
        }
        course.quantity = course.quantity < 0 ? 0 : course.quantity;
        new_courses.push(course);
        return true;
      });
      state.courses = new_courses;
      action.type = "DONE";
      return {
        ...state,
      };
    case "DELETE_ITEM":
      state.courses.map((course) => {
        if (course.name === action.payload.name) {
          course.quantity = 0;
        }
        new_courses.push(course);
        return true;
      });
      state.courses = new_courses;
      action.type = "DONE";
      return {
        ...state,
      };
    case "CHG_LOCATION":
      action.type = "DONE";
      state.Location = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  courses: [
    { id: "Math", name: "Math", quantity: 1, credithour: 3 },
    { id: "English", name: "English", quantity: 1, credithour: 3 },
    { id: "Biology", name: "Biology", quantity: 1, credithour: 6 },
    { id: "Music", name: "Music", quantity: 1, credithour: 6 },
    { id: "Art", name: "Art", quantity: 1, credithour: 3 },
  ],
  Location: "£",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalCourses = state.courses.reduce((total, item) => {
    return (total = total + item.credithour * item.quantity);
  }, 0);

  state.CreditHourValue = totalCourses;

  return (
    <AppContext.Provider
      value={{
        courses: state.courses,
        CreditHourValue: state.CreditHourValue,
        dispatch,
        Location: state.Location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

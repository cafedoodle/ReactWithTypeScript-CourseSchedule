/**
 * CourseList.tsx
 * ----------------
 * - Teaches: how TypeScript interfaces and React Context combine to make component code safer.
 * - `useContext(AppContext)` returns a typed object (`AppContextType` defined in `AppContextData.ts`) so
 *   the compiler knows `courses` is a `Course[]` and will check property access.
 * - Note: When mapping arrays to React elements, always provide a stable `key` prop (here we use `course.id`).
 */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContextData";
import CourseItem from "./CourseItem";

const CourseList: React.FC = () => {
  // `courses` is typed as `Course[]` thanks to the context type. TypeScript will enforce the shape
  // of each `course` when we access `course.id`, `course.name` etc.
  const { courses } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Quantity</th>
          <th scope="col">Credit Hour(s)</th>
          <th scope="col">Total Credit Hour(s)</th>
          <th scope="col">Location</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <CourseItem
            id={course.id}
            key={course.id}
            name={course.name}
            quantity={course.quantity}
            credithour={course.credithour}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;

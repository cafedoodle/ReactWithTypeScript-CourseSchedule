/**
 * CourseCartValue.tsx
 * --------------------
 * - Demonstrates working with typed arrays (`Course[]`) from context
 * - The initial value for `reduce` (0) tells TypeScript the accumulator is a number, so the result is `number`.
 * - `Location` is pulled from the context and used as a location marker in the UI.
 */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContextData";

const CourseCartValue: React.FC = () => {
  // `courses` and `Location` are typed via the context, giving us autocompletion and safety.
  const { courses, Location } = useContext(AppContext);
  // The `reduce` callback works with items of type `Course` (inferred). The initial value `0` ensures
  // the accumulated type is `number` and TypeScript will signal errors if you try to add non-numeric values.
  const totalCourseCreditHours = courses.reduce((total, item) => {
    return (total += item.credithour * item.quantity);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Credit Hour(s) Value:{totalCourseCreditHours}</span>
      <br />
      <span>Location: {Location}</span>
    </div>
  );
};

export default CourseCartValue;

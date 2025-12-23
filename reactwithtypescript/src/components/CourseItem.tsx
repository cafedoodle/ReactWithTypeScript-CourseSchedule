/**
 * CourseItem.tsx
 * ----------------
 * - Shows how to declare explicit props with a TypeScript `interface`.
 * - `CourseItemProps` documents what this component expects and TypeScript enforces it at compile time.
 * - `dispatch` is typed (see `AppContextData`), so calls to `dispatch` must match one of the `Action` union types.
 */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContextData";

interface CourseItemProps {
  id: string;
  name: string;
  quantity: number;
  credithour: number;
}

const CourseItem: React.FC<CourseItemProps> = (props) => {
  // Using the typed context gives us `dispatch` whose type is `Dispatch<Action>` so the payloads and
  // action `type` are checked by TypeScript at compile time.
  const { dispatch, Location } = useContext(AppContext);

  // DELETE handler annotated with `: void` to indicate no meaningful return value.
  const handleDeleteItem = (): void => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  // Exercise: Add quantity controls to let users increase/decrease quantity.
  // Example implementation:
  // const changeQuantity = (delta: number): void => {
  //   if (delta > 0) {
  //     dispatch({ type: "ADD_QUANTITY", payload: { name: props.name, quantity: delta } });
  //   } else {
  //     dispatch({ type: "RED_QUANTITY", payload: { name: props.name, quantity: Math.abs(delta) } });
  //   }
  // };
  //
  // Example buttons to render in the table (uncomment and place inside a <td>):
  // <td>
  //   <button onClick={() => changeQuantity(1)}>+</button>
  //   <button onClick={() => changeQuantity(-1)}>-</button>
  // </td>

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>
        {Location}
        {props.credithour}
      </td>
      <td>
        {Location}
        {props.quantity * props.credithour}
      </td>
      <td>{Location}</td>
      <td>
        <button
          onClick={handleDeleteItem}
          style={{
            background: "none",
            border: "none",
            color: "red",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CourseItem;

/**
 * ItemCourseSelected.tsx
 * ----------------------
 * - Demonstrates consuming the typed `AppContext` via `useContext` and dispatching actions
 *   to update shared state managed by the reducer.
 * - This component uses controlled form inputs (`useState`) for `name`, `quantity`, and `action`.
 * - When the user clicks Save, it dispatches either `ADD_QUANTITY` or `RED_QUANTITY` with a payload
 *   matching the reducer's expected shape: `{ name: string, quantity: number }`.
 */
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextData";

const ItemCourseSelected: React.FC = () => {
  // `useContext(AppContext)` returns the context value from the nearest `AppProvider`.
  // Here we only need `dispatch` to send actions to the reducer.
  // NOTE: Ensure the component tree is wrapped by `AppProvider`, otherwise `dispatch` will be the no-op stub.
  const { dispatch } = useContext(AppContext);

  // Controlled inputs: store input values as strings while the user types.
  // We convert `quantity` to a number when dispatching the action.
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [action, setAction] = useState<string>("");

  const submitEvent = () => {
    // Build payload matching the `Action` payload shape: { name, quantity }
    // Convert `quantity` to a number; in production you should validate this (e.g., check for NaN and positive values).
    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    if (action === "Reduce") {
      // Dispatch typed action `RED_QUANTITY` (reducer will clamp to >= 0)
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      // Dispatch typed action `ADD_QUANTITY` to increase the selected course's quantity
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Course
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option value="">Choose...</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Biology">Biology</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Quantity
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option value="Add">Add</option>
            <option value="Reduce">Reduce</option>
          </select>
          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>
          <input
            required
            type="number"
            id="quantity"
            value={quantity}
            size={10}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCourseSelected;

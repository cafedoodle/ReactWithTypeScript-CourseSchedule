/**
 * Location.tsx
 * -------------
 * - Demonstrates typed event handlers: `React.ChangeEvent<HTMLSelectElement>` ensures the `event` is a select event.
 * - `changeLocation` accepts a `string` payload and dispatches a typed action `CHG_LOCATION`.
 * - Tip: consider making the select a controlled component by adding `value={Location}` so the UI always
 *   reflects the current state from the context.
 */
import React, { useContext } from "react";
//import type { FC, ChangeEvent } from "react";
import { AppContext } from "../context/AppContextData";

const Location: React.FC = () => {
  // Pull both `dispatch` and `Location` (current value) from context so the select can be controlled
  const { dispatch, Location } = useContext(AppContext);

  // typed parameter `val: string` documents expectations and helps prevent accidental type errors
  const changeLocation = (val: string): void => {
    dispatch({
      type: "CHG_LOCATION",
      payload: val,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    changeLocation(event.target.value);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    changeLocation("AUS");
  };

  type OptionType = { value: string; label: string };
  const options: OptionType[] = [
    { value: "AUS", label: "Austin(AUS)" },
    { value: "DAL", label: "Dallas(DAL)" },
    { value: "HOU", label: "Houston(HOU)" },
  ];
  // --- Exercises (practice these to learn typing and handlers):
  // 1) Add a reset button with an explicitly typed click handler:
  //    const handleReset = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //      changeLocation('AUS');
  //    };
  //    and in JSX: <button onClick={handleReset}>Reset to Austin</button>
  //
  // 2) Replace hard-coded <option> elements with a typed `options` array and map over it:
  //    const options: { value: string; label: string }[] = [
  //      { value: 'AUS', label: 'Austin(AUS)' },
  //      { value: 'DAL', label: 'Dallas(DAL)' },
  //      { value: 'HOU', label: 'Houston(HOU)' },
  //    ];
  //    Then use: {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
  //
  // Tip: annotate handlers with `: void` to show they perform side-effects and do not return a value.

  return (
    <div className="alert alert-secondary">
      <label htmlFor="Location">Location</label>{" "}
      <select
        name="Location"
        id="Location"
        // Controlled select: `value` comes from context and `onChange` updates it via dispatch
        value={Location}
        onChange={handleChange}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleReset}>
        Reset to Austin
      </button>
    </div>
  );
};

export default Location;

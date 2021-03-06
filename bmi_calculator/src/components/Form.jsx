import React from "react";

const Form = (props) => {
  return (
    <form>
      <label htmFor="weight">Weigth</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs"
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cm"
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};
export default Form;

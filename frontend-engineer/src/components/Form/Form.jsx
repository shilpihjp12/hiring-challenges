import React from "react";

const Form = (props) => {
  return (
    <div className="Form_control">
      <form className="Form" onSubmit={props.addToMessageBoard}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          name="name"
          className="Form-Text"
          onChange={props.handleNameChange}
        />
        <button type="submit" value="submit" className="Form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

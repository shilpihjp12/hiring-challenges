import React from "react";

const SendMessageForm = (props) => {
  return (
    <form className="send_form" onSubmit={props.handleSubmit}>
      <input
        className="send_input"
        onChange={props.handleMessageChange}
        value={props.message}
        placeholder="Message"
        type="text"
      />
      <button className="send_button">Send</button>
    </form>
  );
};

export default SendMessageForm;

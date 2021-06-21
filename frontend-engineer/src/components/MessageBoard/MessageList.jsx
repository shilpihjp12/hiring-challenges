import React from "react";

const MessageList = (props) => {
  function dateToMonth(index) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    return month[index];
  }
  return (
    <div className="message_list">
      {props.messages.map((message) => {
        return (
          <div className="message">
            <div className="message-text">{message.author}</div>
            <div className="message-desc">{message.message}</div>
            <div className="message-text">
              {new Date(message.timestamp).getDate()}{" "}
              {dateToMonth(new Date(message.timestamp).getMonth())}{" "}
              {new Date(message.timestamp).getFullYear()}{" "}
              {new Date(message.timestamp).getHours()}
              {":"}
              {new Date(message.timestamp).getMinutes()}
            </div>
          </div>
        );
      })}
      {props.myMessages
        ? props.myMessages.map((message) => {
            return (
              <div className="myMessage">
                <div className="message-desc">{message.message}</div>
                <div className="myMessage-text">
                  {new Date(parseInt(message.timestamp)).getDate()}{" "}
                  {dateToMonth(
                    new Date(parseInt(message.timestamp)).getMonth()
                  )}{" "}
                  {new Date(parseInt(message.timestamp)).getFullYear()}{" "}
                  {new Date(parseInt(message.timestamp)).getHours()}
                  {":"}
                  {new Date(parseInt(message.timestamp)).getMinutes()}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MessageList;

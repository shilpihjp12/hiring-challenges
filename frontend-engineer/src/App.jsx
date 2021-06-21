import { PureComponent } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import MessageList from "./components/MessageBoard/MessageList";

import SendMessageForm from "./components/MessageBoard/SendMessageForm";
import background from "./assets/Body_BG.png";

import * as CONSTANT from "./constant/Constant";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      messageList: [],
      myMessages: [],
      nameAdded: false,
    };
    // this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    fetch(CONSTANT.AppURL + "?token=" + CONSTANT.token)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, messageList: data });
      });
  }

  handleUserName = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      nameAdded: true,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleMessageChange = (e) => {
    this.setState({
      ...this.state,
      message: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: CONSTANT.token },
      body: JSON.stringify({ author: "Shivani", message: this.state.message }),
    };
    fetch(CONSTANT.AppURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState((state) => {
          const myMessages = state.myMessages.concat(data);

          return {
            ...state,
            message: "",
            myMessages,
          };
        });
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        {!this.state.nameAdded ? (
          <Form
            handleNameChange={this.handleNameChange}
            name={this.state.name}
            addToMessageBoard={this.handleUserName}
          />
        ) : (
          <>
            <div className="bodyWrapper">
              <MessageList
                messages={this.state.messageList}
                myMessages={this.state.myMessages}
              />
            </div>
            <div className="send_container">
              <SendMessageForm
                handleMessageChange={this.handleMessageChange}
                handleSubmit={this.handleSubmit}
                message={this.state.message}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;

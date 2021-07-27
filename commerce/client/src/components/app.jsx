import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import List from "./List.jsx";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Navbare />;
    }
  }

  render() {
    return <div>{this.renderView.bind(this)}</div>;
  }
}

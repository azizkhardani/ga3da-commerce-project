import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      view: "home",
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    axios.get("/Items").then((res) => {
      this.setState({ items: res.data });
    });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view, items } = this.state;
    if (view === "home") {
      return <Home items={this.state.items}/>;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "sign up") {
      return <Signup />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("home")}>
            Ga3da commerce
          </span>
          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("home")}
          >
            Home
          </span>
          <span
            className="nav-unselected"
            onClick={() => this.changeView("login")}
          >
            Login
          </span>
          <span
            className="nav-unselected"
            onClick={() => this.changeView("sign up")}
          >
            Sign up
          </span>
        </div>
        <div className="main">
          {this.renderView()}
          
        </div>
      </div>
    );
  }
}

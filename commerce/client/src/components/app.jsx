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
      users: [],
      view: "home",
    };
    this.changeView = this.changeView.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
    this.getUsers()
  }

  getUsers () {
    axios.get('/users').then(res =>{
      // this.setState({users : res.data})
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    console.log(this.users, "users")
  }
  getItems() {
    axios.get("/items").then((res) => {
      this.setState({ items: res.data });
    }).catch(err=>{
      console.log(err);
    })
    console.log(this.items, "items");
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view, items } = this.state;

    if (view === "home") {
      return <Home items={items}/>;
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
          <span 
          className="logo"
          style={{cursor:"pointer"}}
          onClick={() => this.changeView("home")}> Ga3da commerce </span>
          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("home")}>  Home </span>
          <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("login")}> Login </span>
          <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("sign up")}> Sign up </span>
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

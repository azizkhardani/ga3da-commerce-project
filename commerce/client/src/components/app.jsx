import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Basket from "./Basket.jsx";
import Profile from "./Profile.jsx";
import Field from "./Field.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      user:[]
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
   

    // axios.get(`/api/user/${this.state.user._id}`)
    // .then((res) => {
    //   this.setState({
    //     user: res.data
    //   });
    //   console.log('----gett', this.state.user)
    // })
    // .then((res)=>{
      this.setState({
        view: option,
      });
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }

  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Navbare changeView={this.changeView} />;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "signup") {
      return <Signup />;
    } else if (view === "profil") {
      return <Field  changeView={this.changeView} user={this.state.user} />;
    } else if (view === "basket") {
      return <Basket />;
    } else {
      return <Profile user={this.state.user}/>;
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

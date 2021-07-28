import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import Field from "./Field.jsx";
import Basket from "./Basket.jsx";
import axios from "axios";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: [],
      view: "home",
      user:[]
    };
    this.changeView = this.changeView.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getUsers = this.getUsers.bind(this);
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
    const { view, items } = this.state;

    if (view === "home") {
      return <Home items={items}/>;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "sign up"){
      return <Signup />;
    }
    else if (view === "field"){
      return <Field user={this.state.user} changeView={this.changeView}/>;
    }
    else if (view === "profil"){
      return <Profile user={this.state.user}/>
    }else{
     return <Basket/>
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
                <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("field")}> Profil </span>
                <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("basket")}> Basket </span>
        </div>
        <div>
          {this.renderView()}
        </div>
      </div>
    );
  }
}

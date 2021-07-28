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
      view: "home",
      user:[]
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    
      axios.get("/Items").then((res) => {
        this.setState({ items: res.data });
      });
    
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
      return <Home items={this.state.items}/>;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "sign up"){
      return <Signup />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={()=>this.changeView("home")}>
            Ga3da commerce
          </span>
          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            onClick={()=>this.changeView("home")}
          >
            Home
          </span>
          <span
            className="nav-unselected"
            onClick={()=>this.changeView('login')}
          >
            Login
          </span>
          <span
            className="nav-unselected"
            onClick={()=>this.changeView("sign up")}
          >
            Sign up
          </span>
          <span
            className="nav-unselected"
            onClick={()=>this.changeView("profil")}
          >
            Profil
          </span>
          <span
            className="nav-unselected"
            onClick={()=>this.changeView("basket")}
          >
            Basket
          </span>
        </div>
        <div>
          {this.renderView()}
          
        </div>
      </div>
    );
  }
}

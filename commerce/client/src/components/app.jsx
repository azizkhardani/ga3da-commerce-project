import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Profile from "./Profile";
import axios from "axios";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   view: "",
      data: []
    };
  }

  componentDidMount(){
      this.fetchUsers()
  }

  fetchUsers () {
      axios.get('/users').then(result=>{
          this.setState({
              data: result.data
          })
          console.log(data, 'users data');
      })
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === 'navbar'){
        return <Navbare />;
    } 
  }

  render() {
    return (
    // <Navbare />
        <div>
            {this.renderView.bind(this)}
        </div>
        
    )
  }
}

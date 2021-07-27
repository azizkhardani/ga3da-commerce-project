import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import List from "./List.jsx";
import axios from "axios";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
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
    if (view === "home") {
      return <Navbare />;
    } else if (view === "sign up") {
      return <Signup />
    }
  }

getItems(){
    axios.get("/Items").then(({data})=>{
        this.setState({items: data})
    })
}


componentDidMount(){
    this.getItems();
}


  render() {
    return (
    
        <div>
            {this.renderView()}
            <List items= {this.state.items}/>
        </div>
        
    )
  }
}

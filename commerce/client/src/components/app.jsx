import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import List from "./List.jsx";
import axios from 'axios';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      items: [],
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Navbare changeView = {this.changeView}/>;
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

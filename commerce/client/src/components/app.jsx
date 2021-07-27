import React from "react";
import Navbare from "./Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import List from "./List.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from 'react-router-dom'
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  fetchItems() {
    axios.get("/Items").then(({ data }) => {
      this.setState({ items: data });
    });
  }

  createItems() {
    axios.post("/Items", this.state.items).then((data) => {
      console.log(data);
      location.reload();
    });
  }

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbare />
          <Switch>
            <Route exact path="/" component={() => <List items={this.state.items} />} />
            {/* <List items={this.state.items}/> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

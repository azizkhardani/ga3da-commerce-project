import React, { useState } from 'react';
import Navbare from './Navbar.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import List from './List.jsx'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            view : "home"
        }
    }

    changeView (option) {
        this.setState({
          view: option
        });
      }

      renderView () {
        const {view} = this.state;
        if(view === 'home') {
            return <Navbare />
        }

      }

    render(){
        return (
            <div>
                {/* <Router>
                <Navbare /> 
                <Switch>
                <Route exact path='/' component={List} />
                <Route  path='/login' component={Login} />
                <Route  path='/signup' component={Signup} />
                </Switch>
                </Router> */}
            </div>
        )
    }
}
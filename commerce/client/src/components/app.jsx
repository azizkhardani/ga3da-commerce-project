import React, { useState } from 'react';
import Navbare from './Navbar.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import List from './List.jsx'
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            view : "home",
            data : []
        }
    }

    componentDidMount(){
        getUsers()
    }

    getUsers(){
        axios.get('/users').then(result =>{
            this.setState({
                data : result.data
            })
            console.log(this.state.data, 'dataaa');
        }).catch(err=>{
            console.log(err);
        })
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
                {this.renderView.bind(this)}
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
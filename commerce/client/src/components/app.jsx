import React, { useState } from 'react';
import Navbare from './Navbar.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
// import List from './List.jsx'
// import Profile from './Profile.jsx'
import Basket from './Basket.jsx'


export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            view : "home",
            basket:[]
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView (option) {
        this.setState({
          view: option
        });
      }

      renderView () {
        const {view} = this.state;
        if(view === 'home') {
            return <Navbare changeView={this.changeView} />
        } else if(view === 'login'){
            return <Basket/>
        }else{
            return <Signup/>
        }

      }

    render(){
        return (
            <div>
              {this.renderView()}
            </div>
        )
    }
}
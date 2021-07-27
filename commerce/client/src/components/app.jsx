import React from 'react';
import Navbare from './Navbar.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import List from './List.jsx'
import axios from 'axios';


export default class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            view : "home",
            data : []
        }
    }

    // componentDidMount(){
    //     getUsers()
    // }

    // getUsers(){
    //     axios.get('/users').then(result =>{
    //         this.setState({
    //             data : result.data
    //         })
    //         console.log(this.state.data, 'dataaa');
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }

    changeView (option) {
        this.setState({
          view: option
        });
      }

      renderView () {
        const {view} = this.state;
        if(view === 'home') {
            return <Navbare handleChange={this.changeView.bind(this)}/>
        } else if (view === "login" ){
            return <Login/>
        } else if (view === "sign up") {
            return <Signup />
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
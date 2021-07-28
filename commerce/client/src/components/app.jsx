import React from 'react'
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      view : "home",
      users: [],
      items: []
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView(){
    const {view, users, items} = this.state
    if (view === "home"){
      return <Home />
    } else if (view === "login") {
      return <Login />
    } else if (view === "sign up") {
      return <Signup />
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('home')}>
            Ga3da commerce
          </span>
          <span className={this.state.view === 'home'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('home')}>
            Home
          </span>
          <span className="nav-unselected"
          onClick={ () => this.changeView('login')}>
            Login
          </span>
          <span className="nav-unselected" 
            onClick={ () => this.changeView('sign up')}>
            Sign up
          </span>
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div> 
    )
  }
}


import React from 'react';

const Signup=()=>{
    return(
        <div>
            <form id="SignUpForm" action="SignUp">
                <h3>Sign Up</h3>
                <br />
                <label id="nameLabel"> Name </label> <br />
                <input id="nameInput" type="name" placeholder="enter your name"/>
                <br />
                <label id="emailLabel"> Email </label> <br />
                <input id="emailInput" type="text" placeholder="email@example.com" />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"/>
                <br />
                <br />
                <button id="signUpBtn" >Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
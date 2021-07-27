import React, {useState} from 'react';
import axios from 'axios';



// const login = (event)=>{
//     event.preventDefault();
     
//     axios.post('/login', {
//       username: username,
//       password: password
//     }).then((response)=>{
//       console.log(response);
//       if (response.data.length > 0) {
        
//         console.log('logged in');
//       }
//     })
//       .catch((error)=>{
//         if (error) { alert('Wrong password/username !'); } 
//       });
        
//   };

const Login=()=>{
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    return(
        <div>
            <form id="loginForm" action="login">
                <h3>Login</h3>
                <br />
                <label id="emailLabel"> Email </label> <br />
                <input id="emailInput" type="text" placeholder="email@example.com" />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"/>
                <br />
                <button id="loginBtn" > Login </button>
                <br />
                <br />
                <h6>forgot password? </h6>
                <br />
                <h6>Dont have an account ? Register here.</h6>
            </form>
        </div>
    )
}

export default Login
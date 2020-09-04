import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
      auth.signInWithPopup(provider)
      .then(result => {
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          });
          console.log(result.user);
      })  
      .catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png"
                alt=""
                />
                <img 
                src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview.png"
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In 
            </Button>
        </div>
    )
}

export default Login

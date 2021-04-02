import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    // const [user,setUser] = useState({})
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
        const {displayName,email} = result.user;
        const signInUser = {name:displayName,email:email}
        setLoggedInUser(signInUser);
        history.replace(from);
    })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
        
    });
    }
    return (
        <div className=" google">
            <h2 style={{marginLeft:'10px',marginTop:'10px'}}>Login</h2>
            <button className="login-button" onClick={handleGoogleSignIn}> Continue With Google</button>
        </div>
    );
};

export default Login;
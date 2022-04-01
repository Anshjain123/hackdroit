import { React, useState } from 'react'
import './Login.css'
import loginphoto from './Images/loginphoto.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
const Login = () => {

    const [eye, seteye] = useState(true);
    const [inpass, setinpass] = useState("password");
    const [warning, setwarning] = useState(false);
    const [tick, settick] = useState(false);

    const [inputText, setInputText] = useState({

        email: "",
        password: ""
    });
    const responseGoogle = (response) => {
        
        console.log(response);
    }

    const [wemail, setwemail] = useState(false);
    const [wpassword, setwpassword] = useState(false);

    const Eye = () => {
        if (inpass == "password") {
            setinpass("text");
            seteye(false);
            setwarning(true);
        }
        else {
            setinpass("password");
            seteye(true);
            setwarning(false);
        }
    }

    const Tick = () => {

        if (tick) {
            settick(false);
        }
        else {
            settick(true);
        }
    }


    const inputEvent = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputText((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }

    const submitForm = (e) => {

        e.preventDefault();

        setwemail(false);
        setwpassword(false);
        if (inputText.email == "") {
            setwemail(true);
        }
        else if (inputText.password == "")
            setwpassword(true);
        else {
            alert("form submitted");
        }
    }




    return (
        <>

            <div className="container">
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            <img src={loginphoto} />


                        </div>
                        <div className="right-side">
                            <div className="heading">
                                <h3>Log in to BelazaeYuk.</h3>
                                <p>Welcome Back! login with your data that you entered during registration.</p>
                            </div>
                            <div className="social" >
                                {/* <span><i class="fa-brands fa-google">Log in with Google</i></span> */}
                                {/* <svg data-testid="DeleteIcon">Log in with Google</svg> */}

                                <div className="flex">
                                    
                                    <GoogleLogin
                                        clientId="109272294286-vh4661ubc1jnocqt52kfnucfck4mo1ap.apps.googleusercontent.com"
                                        
                                        buttonText="Login / SignUp"
                                        onSuccess={responseGoogle}
                                        // onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>

                            </div>
                            <hr />
                            <div className="or">
                                <p>or</p>
                            </div>
                            <form onSubmit={submitForm}>
                                <div className="input-text">
                                    <input type="text" className={`${wemail ? "text-warning" : ""}`} value={inputText.email} onChange={inputEvent} name="email" />
                                    <label>Email</label>
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="input-text">
                                    <input type={inpass} className={` ${warning ? "warning" : ""} ${wpassword ? "text-warning" : ""}`} value={inputText.password} onChange={inputEvent} name="password" />
                                    <label>Password</label>
                                    <i className="fa fa-lock"></i>
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>

                                <div className="rem_pass">
                                    <div className="remember">
                                        <span onClick={Tick} className={` ${tick ? "green" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Remember Me</p>
                                    </div>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <div className="button">
                                    <button type="submit">Login</button>

                                </div>
                            </form>
                            <div className="register">
                                <p>Didn't have an account?<a href="#"> Register</a></p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Login


import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, loginUser } from '../services/internalApiService'

const LoginAndRegister = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [signupValidationErrors, setSignupValidationErrors] = useState(null);
    const [loginErrors, setLoginErrors] = useState(null);
    const [signupError, setSignupError] = useState(null);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            userName,
            email,
            password,
            confirmPassword
        };

        createUser(newUser)
            .then((data) => {
                console.log('new user data:', data);
                localStorage.setItem('token', JSON.stringify(data.token))
                navigate('/signup')
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.data?.name === "ValidationError") {
                    setSignupValidationErrors(error?.response?.data?.errors);
                } else {
                    setSignupError(error.response.data)
                }
                
            })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = { email: loginEmail, password: loginPassword }

        loginUser(user)
            .then((data) => {
                console.log('login user:', data);
                localStorage.setItem('token', JSON.stringify(data.token))
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setLoginErrors(error?.response?.data);
            })
    }

    return (
        <div className="contentContainer">
            <div className="registerFormContainer">
                <p className="createAccount">Create Account</p>
                <form className="registerForm"
                    onSubmit={handleRegisterSubmit}>
                    <div className="form-group mb-3 row">
                        { signupError?.message && <p>{signupError.message}</p>}
                        <label className="form-label">Username: </label>
                        {
                            signupValidationErrors?.userName &&
                            <span style={{ color: 'red' }}>
                                {signupValidationErrors?.userName?.message}
                            </span>
                        }
                        <input className="form-control" id="registerInput"
                            type="text"
                            value={userName}
                            onChange={e => setUserName(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Email: </label>
                        {
                            signupValidationErrors?.email &&
                            <span style={{ color: 'red' }}>
                                {signupValidationErrors?.email?.message}
                            </span>
                        }
                        <input className="form-control" id="registerInput"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Password: </label>
                        {
                            signupValidationErrors?.password &&
                            <span style={{ color: 'red' }}>
                                {signupValidationErrors?.password?.message}
                            </span>
                        }
                        <input className="form-control"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">ConfirmPassword: </label>
                        {
                            signupValidationErrors?.confirmPassword &&
                            <span style={{ color: 'red' }}>
                                {signupValidationErrors?.confirmPassword?.message}
                            </span>
                        }
                        <input className="form-control mb-3"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <input className="registerBtn" type="submit" value="CREATE" />
                    </div>
                </form>
            </div >


            <div className="loginFormContainer">
                <p className="signIn">Sign In</p>
                <form className="loginForm"
                    onSubmit={handleLoginSubmit}>
                    <div className="form-group mb-3 row">
                        <label className="form-label">Email: </label>
                        {
                            loginErrors?.message &&
                            <span style={{ color: 'red' }}>
                                {loginErrors.message}
                            </span>
                        }
                        <input className="form-control" id="loginInput"
                            type="email"
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Password: </label>
                        {/* {
                            loginErrors.messageord &&
                            <span style={{ color: 'red' }}>
                                {signupErrors?.password?.message}
                            </span>
                        } */}
                        <input className="form-control" id="loginInput"
                            type="password"
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <input className="loginBtn" type="submit" value="Sign In" />
                    </div>

                </form>
            </div>
        </div >
    )
}

export default LoginAndRegister;
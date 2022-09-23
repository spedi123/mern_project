import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, loginUser } from '../services/internalApiService'

const LoginAndRegister = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [registerValidationErrors, setRegisterValidationErrors] = useState(null);
    const [registerErrors, setRegisterErrors] = useState(null);
    const [loginErrors, setLoginErrors] = useState(null);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            password,
            confirmPassword
        };

        createUser(newUser)
            .then((data) => {
                console.log('new user data:', data);
                localStorage.setItem('token', JSON.stringify(data.token))
                window.confirm(`You have successfully registered.`)
                navigate('/users')
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.data?.name === "ValidationError") {
                    setRegisterValidationErrors(error?.response?.data?.errors);
                } else {
                    setRegisterErrors(error.response.data)
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
                        {
                            registerErrors?.message &&
                            <p>{registerErrors.message}</p>
                        }
                        <label className="form-label">Username: </label>
                        {
                            registerValidationErrors?.message &&
                            <span style={{ color: 'red' }}>
                                {registerValidationErrors?.message}
                            </span>
                        }
                        <input className="form-control" id="registerInput"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Email: </label>
                        {
                            registerValidationErrors?.email &&
                            <span style={{ color: 'red' }}>
                                {registerValidationErrors?.email?.message}
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
                            registerValidationErrors?.password &&
                            <span style={{ color: 'red' }}>
                                {registerValidationErrors?.password?.message}
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
                            registerValidationErrors?.confirmPassword &&
                            <span style={{ color: 'red' }}>
                                {registerValidationErrors?.confirmPassword?.message}
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
                            {registerErrorss?.password?.message}
                            </span>
                        } */}
                        <input className="form-control" id="loginInput"
                            type="password"
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)} />
                        {
                            loginErrors?.message &&
                            <span style={{ color: 'red' }}>
                                {loginErrors.message}
                            </span>
                        }
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
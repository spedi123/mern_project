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

    const [errors, setErrors] = useState(null);

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
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = { email: loginEmail, password: loginPassword }

        loginUser(user)
            .then((data) => {
                console.log('login user:', data);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            })
    }

    return (
        <div className="contentContainer">
            <div className="registerFormContainer">
                <p className="createAccount">Create Account</p>
                <form className="registerForm"
                    onSubmit={handleRegisterSubmit}>
                    <div className="form-group mb-3 row">
                        <label className="form-label">Username: </label>
                        {
                            errors?.userName &&
                            <span style={{ color: 'red' }}>
                                {errors?.userName?.message}
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
                            errors?.email &&
                            <span style={{ color: 'red' }}>
                                {errors?.email?.message}
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
                            errors?.password &&
                            <span style={{ color: 'red' }}>
                                {errors?.password?.message}
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
                            errors?.confirmPassword &&
                            <span style={{ color: 'red' }}>
                                {errors?.confirmPassword?.message}
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
                            errors?.email &&
                            <span style={{ color: 'red' }}>
                                {errors?.email?.message}
                            </span>
                        }
                        <input className="form-control" id="loginInput"
                            type="email"
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)} />
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Password: </label>
                        {
                            errors?.password &&
                            <span style={{ color: 'red' }}>
                                {errors?.password?.message}
                            </span>
                        }
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
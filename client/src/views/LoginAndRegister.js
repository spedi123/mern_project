import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {createUser, loginUser} from '../services/internalApiService'

const LoginAndRegister = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    // const [ email, setEmail ] = useState("")
    // const [ password, setPassword ] = useState("")

    const handleRegister = (e) => {
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
            } )
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email, password }

        loginUser(user)
            .then((data) => {
                console.log('login user:', data);
                navigate('/')  
            })
            .catch((error) => {
                console.log(error);
            } )
    }

    return (
        <div style={{textAlign: "center"}} className="d-flex justify-content-around">
            <div>
                <form onSubmit={handleRegister}>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">UserName: </label>
                            <input type="text" value={ userName } onChange={ e => setUserName(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">Email: </label>
                            <input type="text" value={ email } onChange={ e => setEmail(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">Password: </label>
                            <input type="text" value={ password } onChange={ e => setPassword(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">ConfirmPassword: </label>
                            <input type="text" value={ confirmPassword } onChange={ e => setConfirmPassword(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Create" className="btn"/>
                    </div>
                </form>
            </div>
            <div>
            <form onSubmit={handleLogin}>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">Email: </label>
                            <input type="text" value={ email } onChange={ e => setEmail(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-block">
                            <label className="form-label">Password: </label>
                            <input type="text" value={ password } onChange={ e => setPassword(e.target.value) } className="form-input_text"/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Login" className="btn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAndRegister;
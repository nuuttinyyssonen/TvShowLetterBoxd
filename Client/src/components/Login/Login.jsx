import { useState } from "react";
import LoginForm from "./LoginForm";
import loginService from "../../services/loginService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();
        try {
            const user = {
                username,
                password
            };
            const response = await loginService.loginUser(user);
            localStorage.setItem('token', response.token);
            navigate('/main')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <LoginForm 
                username={username} 
                password={password} 
                setUsername={setUsername} 
                setPassword={setPassword}
                handleLogin={handleLogin}
            />
        </div>
    )
};

export default Login;
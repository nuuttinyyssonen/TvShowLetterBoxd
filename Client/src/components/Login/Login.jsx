import { useState } from "react";
import LoginForm from "./LoginForm";
import loginService from "../../services/loginService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(event) => {
        event.preventdefault();
        try {
            const user = {
                username: username,
                password: password
            };
            const response = await loginService.loginUser(user);
            console.log(response);
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
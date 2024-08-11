import { Link } from "react-router-dom";

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
    return(
        <div>
            <p>Login here</p>
            <form onSubmit={handleLogin}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Log in</button>
            </form>
            <p>Not a member yet? Signup <Link to='/signup'>here</Link></p>
        </div>
    )
};

export default LoginForm;
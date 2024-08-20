import { Link } from "react-router-dom";
const SignupForm = ({ username, setUsername, password, setPassword, email, setEmail, handleSignup }) => {
    return (
        <div>
            <p>Signup here</p>
            <form onSubmit={handleSignup}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Sign up</button>
            </form>
            <p>Member already? Login <Link to='/'>here</Link></p>
        </div>
    )
};

export default SignupForm;
import { useState } from "react";
import signupService from "../../services/signupService";
import SignupForm from "../Signup/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSignup = async(event) => {
        event.preventDefault();
        try {
            const user = {
                username,
                password,
                email
            }
            const response = await signupService.signupUser(user);
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div>
            <SignupForm
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                handleSignup={handleSignup}
            />
        </div>
    )
};

export default Signup;
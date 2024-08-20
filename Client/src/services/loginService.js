import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/login'

const loginUser = async (user) => {
    const response = await axios.post(baseUrl, user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.data
};

export default {
    loginUser
};
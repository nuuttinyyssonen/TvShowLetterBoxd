import axios from 'axios';

const baseUrl = 'http://localhost:5000/login'

const loginUser = async (user) => {
    const resposne = await axios.post(baseUrl, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return resposne.data
};

export default {
    loginUser
}
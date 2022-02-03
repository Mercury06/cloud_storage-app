import axios from 'axios';

export const registration = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:8000/api/auth/reg", {
            email,
            password
        })
        console.log(email, password)
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}
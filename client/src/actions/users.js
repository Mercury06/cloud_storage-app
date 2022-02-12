import axios from 'axios';
import {setUser} from "../reducers/userReducer";


export const registration = async ({...form}) => {
   
    try {        
        const response = await axios.post("http://localhost:8000/api/auth/reg", { ...form})
        console.log(response.data.message)
      
    } catch (e) {
        console.log(e.response.data.message)
     }
  
}

export const login = ({...form}) => {
    //debugger;
    return async dispatch => {
  
        try {        
            const response = await axios.post("http://localhost:8000/api/auth/login", { ...form})
            console.log(response.data)            
            dispatch(setUser(response.data.user))
            //console.log(response.data.user.email)
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:8000/api/auth/auth",
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
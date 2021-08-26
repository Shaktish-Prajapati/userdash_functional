import axios from 'axios';
import { 
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT
} from '../constants/adminConstant'



export const loginWithMobile = (mobile, password) => async (dispatch)=>{
    try {
        dispatch({type:ADMIN_LOGIN_REQUEST});
        const config = {
            header: {
                "Content-type": "application/json"
            },
        }

        const {data} = await axios.post('https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingMob',{
            mobile,
            password
        },
        config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS, 
            payload:data
        })

        localStorage.setItem("adminInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}

export const loginWithEmail = (email, password) => async (dispatch)=>{
    try {
        dispatch({type:ADMIN_LOGIN_REQUEST});
        const config = {
            header: {
                "Content-type": "application/json"
            },
        }

        const {data} = await axios.post('https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingEmail',{
            email,
            password
        })

        dispatch({
            type: ADMIN_LOGIN_SUCCESS, 
            payload:data
        },
        config
        )

        localStorage.setItem("adminInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}
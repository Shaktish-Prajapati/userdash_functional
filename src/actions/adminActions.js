import axios from 'axios';
import cookie from 'react-cookies';

import { 
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT,

    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_REGISTER_FAIL
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
        // console.log(data.data.user)
        // cookie.save('token',data.data.user)

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
    console.log(email, password)
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
        },
        config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS, 
            payload:data
        })

        localStorage.setItem("adminInfo", JSON.stringify(data))
        cookie.save('token',data.data.user.token)
        // console.log(data.data.user.token);

    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}

export const adminLogout = () => async (dispatch)=>{
    localStorage.removeItem('adminInfo');
    dispatch({
        type:ADMIN_LOGOUT
    })
}


// ****************** ADMIN REGISTER ACTIONS *************************
export const adminRegister = (registerForm) => async (dispatch)=>{
    console.table({...registerForm})
    try {
        dispatch({
            type: ADMIN_REGISTER_REQUEST
        })
        const {
            firstName, 
            lastName, 
            email,
            phone,
            country,
            password,
            gender,
        } = registerForm

        const config = {
            header: {
                "Content-type": "application/json"
            },
        }
        // https://insulink-backend.herokuapp.com
        const {data} = await axios.post('http://192.168.1.13:8000/api/v1/auth/signup',{
            firstName, 
            lastName, 
            email,
            phone,
            country,
            password,
            gender,
        },
        config)

        dispatch({
            type: ADMIN_REGISTER_SUCCESS, 
            payload:data
        })

        localStorage.setItem("adminInfo", JSON.stringify(data))
        cookie.save('token',data.user.token)


    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}
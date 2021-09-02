import axios from 'axios'
import cookie from 'react-cookies'
import {
    ADMIN_LOGIN_MOBILE,
    ADMIN_LOGIN_EMAIL,
    ADMIN_REGISTER
} from '../actionTypes'

export const adminLoginMobile = (formData) =>  async (dispatch) =>{
    console.log(formData);
    try {
        await axios.post(`https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingMob`, {
            phone:formData.mobile,
            password:formData.password
        }).then (response => {
            const res =  response.data
            cookie.save('token',res.data.data.user.token)
            console.log(cookie.load('token'))
            const action = {
                type: ADMIN_LOGIN_MOBILE,
                payload: res
            }
            dispatch(action)
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const adminLoginEmail = (formData) =>  async (dispatch) =>{
    console.log(formData);
    // try {
    //     await axios.post(`https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingMob`, {
    //         phone:formData.mobile,
    //         password:formData.password
    //     }).then (response => {
    //         const res =  response.data
    //         cookie.save('token',res.data.data.user.token)
    //         console.log(cookie.load('token'))
    //         const action = {
    //             type: ADMIN_LOGIN_MOBILE,
    //             payload: res
    //         }
    //         dispatch(action)
    //     })
    // } catch (error) {
    //     console.log(error.message)
    // }
}

// export const createPost = (post)=> async (dispatch)=>{
//     try {
//         const {data} = await api.createPost(post)
//         const action = {type:CREATE,payload:data}
//         dispatch(action)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
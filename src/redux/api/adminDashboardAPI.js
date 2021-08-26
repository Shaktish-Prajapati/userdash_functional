import axios from 'axios'
const url = 'https://journey-mumbai.herokuapp.com/posts'
// Making request to api
export const adminLoginMobile =(mobileNumber, password)=> axios.post(`https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingMob`, {
                                phone:mobileNumber,
                                password:password})
export const adminLoginEmail =(email, password)=> axios.post(`https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingEmail`, {
                                email:email,
                                password:password})

// export const register = (fields)=> axios.post(url,newPost)
// export const updatePost = (id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
// export const likePost = (id)=>axios.patch(`${url}/${id}/likepost`)
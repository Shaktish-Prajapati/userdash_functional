import {
ADMIN_LOGIN_MOBILE,
ADMIN_LOGIN_EMAIL,
ADMIN_REGISTER
} from '../actionTypes'

export const loginReducer = (login={},action)=>{
    switch (action.type) {
        case ADMIN_LOGIN_MOBILE:
            return [
                ...login,
                action.payload
            ]
        

        case ADMIN_LOGIN_EMAIL:
            return [
                ...login,
                action.payload
            ]
    
        default:
            return login
    }
}
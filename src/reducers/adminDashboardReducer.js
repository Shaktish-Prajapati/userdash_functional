import {
    ADMIN_DASH_TODAY_INSULIN_REQUEST,
    ADMIN_DASH_TODAY_INSULIN_SUCCESS,
    ADMIN_DASH_TODAY_INSULIN_FAIL,

    ADMIN_DASH_WEEK_AVERAGE_REQUEST,
    ADMIN_DASH_WEEK_AVERAGE_SUCCESS,
    ADMIN_DASH_WEEK_AVERAGE_FAIL,

    ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_REQUEST,
    ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_SUCCESS,
    ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_FAIL,

    ADMIN_DASH_DEVICE_STATUS_REQUEST,
    ADMIN_DASH_DEVICE_STATUS_SUCCESS,
    ADMIN_DASH_DEVICE_STATUS_FAIL

} from '../constants/adminDashBoardConstant'

// TODAY INSULIN DATA
export const todayInsulinReducer = (state={}, action)=>{
    switch (action.type) {
        case ADMIN_DASH_TODAY_INSULIN_REQUEST:
            return {
                loading:true
            }
        
        case ADMIN_DASH_TODAY_INSULIN_SUCCESS:
            return {
                loading:false,
                insulinData: action.payload
            }
        
        case ADMIN_DASH_TODAY_INSULIN_FAIL:
            return {
                loading:false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

// WEEK AVERAGE AND PREVIOUS WEEK DATA OR FROM DATE TO DATE
export const weekAverageReducer = (state={}, action) =>{
    switch (action.type) {
        case ADMIN_DASH_WEEK_AVERAGE_REQUEST:
            return {
                loading: false
            }
        
        case ADMIN_DASH_WEEK_AVERAGE_SUCCESS:
            return {
                loading: false,
                weekAverageData: action.payload
            }
        
        case ADMIN_DASH_WEEK_AVERAGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}

// ADMIN DASH THREE MONTH DATA FOR AVERAGE INSULIN AND BASAL BOLUS AND CONVERT IT INTO AVERAGE GLUCOSE

export const threeMonthAverageReducer = (state={}, action)=>{
    switch (action.type) {
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_REQUEST:
            return {
                loading: true,
            }
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_SUCCESS:
            return {
                loading:false,
                threeMonthAverageData: action.payload
            }
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_FAIL:
            return {
                loading:false,
                error: action.payload
            }
    
        default:
            return state
    }
}

// USER DASHBOARD DEVICE STATUS

export const adminDashboardDevice = (state={}, action)=>{
    switch (action.type) {
        case ADMIN_DASH_DEVICE_STATUS_REQUEST:
            return {
                loading: false,
            }
        
        case  ADMIN_DASH_DEVICE_STATUS_SUCCESS:
            return {
                loading: false,
                adminDeviceStatusData: action.payload
            }
        
        case ADMIN_DASH_DEVICE_STATUS_FAIL:
            return {
                loading:false,
                error: action.payload
            }
    
        default:
            return state
    }
}


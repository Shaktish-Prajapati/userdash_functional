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
export const todayInsulinReducer = (todayInsulinState={}, action)=>{
    switch (action.type) {
        case ADMIN_DASH_TODAY_INSULIN_REQUEST:
            return {
                ...todayInsulinState,
                loading:true
            }
        
        case ADMIN_DASH_TODAY_INSULIN_SUCCESS:
            return {
                ...todayInsulinState,
                loading:false,
                insulinData: action.payload
            }
        
        case ADMIN_DASH_TODAY_INSULIN_FAIL:
            return {
                ...todayInsulinState,
                loading:false,
                error: action.payload
            }
    
        default:
            return todayInsulinState;
    }
}

// WEEK AVERAGE AND PREVIOUS WEEK DATA OR FROM DATE TO DATE
export const weekAverageReducer = (weekAverageState={}, action) =>{
    switch (action.type) {
        case ADMIN_DASH_WEEK_AVERAGE_REQUEST:
            return {
                
                loading: true
            }
        
        case ADMIN_DASH_WEEK_AVERAGE_SUCCESS:
            return {
                
                loading: false,
                weekAverageData: action.payload
            }
        
        case ADMIN_DASH_WEEK_AVERAGE_FAIL:
            return {
                ...weekAverageState,
                loading: false,
                error: action.payload
            }
    
        default:
            return weekAverageState
    }
}

// ADMIN DASH THREE MONTH DATA FOR AVERAGE INSULIN AND BASAL BOLUS AND CONVERT IT INTO AVERAGE GLUCOSE

export const threeMonthAverageReducer = (state={}, action)=>{
    switch (action.type) {
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_SUCCESS:
            return {
                ...state,
                loading:false,
                threeMonthAverageData: action.payload
            }
        case ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_FAIL:
            return {
                ...state,
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
                loading: true,
            }
        
        case  ADMIN_DASH_DEVICE_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                adminDeviceStatusData: action.payload
            }
        
        case ADMIN_DASH_DEVICE_STATUS_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
    
        default:
            return state
    }
}


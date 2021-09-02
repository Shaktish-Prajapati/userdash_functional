import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    adminLoginReducer,
    adminRegisterReducer,
} from "./reducers/adminReducer"

import {
    todayInsulinReducer,
    weekAverageReducer,
    threeMonthAverageReducer,
    adminDashboardDevice,
} from "./reducers/adminDashboardReducer"

const rootReducer = combineReducers({
    adminLoginReducer,
    adminRegisterReducer,
    
    // user dashboard states
    todayInsulinReducer,
    weekAverageReducer,
    threeMonthAverageReducer,
    adminDashboardDevice,

})

// const initialState = {}

const middleware = [thunk]

const store  = createStore(
    rootReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;



import axios from 'axios'
import cookie from 'react-cookies'
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

export const todayInsulin = ()=> async(dispatch) => {
    console.log("today insulin")
    try {
        dispatch({type:ADMIN_DASH_TODAY_INSULIN_REQUEST});
        console.log('DISPATCH REQ')

        const tokenVal = cookie.load('token');
        console.log(`today insulin action token val: ${tokenVal}`)

        const config = {
            headers: {
                // "Content-type": "application/json",
                'Authorization': `Bearer ${tokenVal}`
            },
        }

        console.log(config)

        const {data} = await axios.get(`https://insulink-backend.herokuapp.com/api/v1/dashboard/today-intake`,
            config
            )
            console.log(`today insulin action data: ${data}`)
        dispatch({
            type: ADMIN_DASH_TODAY_INSULIN_SUCCESS, 
            payload:data
        })
        console.log('DISPATCH SUCCESS')
        // localStorage.setItem("adminInfo", JSON.stringify(data))
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: ADMIN_DASH_TODAY_INSULIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
        console.log('DISPATCH ERROR')
    }
}

export const weekAverage = () => async(dispatch) => {
    try {
        dispatch({type:ADMIN_DASH_WEEK_AVERAGE_REQUEST});

        const tokenVal = cookie.load('token')
        console.log(`week average action token val: ${tokenVal}`)

        const dualAPiCall =  async (startDate=0,daysGoBack=7)=>{

            const today = new Date()
            const enddate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-startDate}`
            const startdate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-daysGoBack}`
            
            const res = await axios.get(`https://insulink-backend.herokuapp.com/api/v1/dashboard/get-avg-report`, {
                headers: {
                    'Authorization': `Bearer ${tokenVal}`
                  },
                params:{
                    startDate: startdate,
                    endDate: enddate,
                }
            })
            return res.data.data
            
        };
        
            const currentWeek = await dualAPiCall();
            const prevWeek = await dualAPiCall(7);
            console.log(currentWeek, prevWeek)
            // if(currentWeek != null && prevWeek!=null){
            //     console.log(currentWeek, prevWeek)
            //     const avgData = {
            //         currentWeek,
            //         prevWeek
            //     }
                console.log("current week data ",currentWeek)
                dispatch({
                    type: ADMIN_DASH_WEEK_AVERAGE_SUCCESS, 
                    payload: {
                        currentWeek,
                        prevWeek
                    }
                })
            // }

    } catch (error) {
        dispatch({
            type: ADMIN_DASH_WEEK_AVERAGE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}

export const threeMonthAverage = () => async(dispatch) => {
    try {
        dispatch({type:ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_REQUEST});
        console.log('DISPATCH REQ')

        const tokenVal = cookie.load('token');
        console.log(`today insulin action token val: ${tokenVal}`)

        const config = {
            headers: {
                // "Content-type": "application/json",
                'Authorization': `Bearer ${tokenVal}`
            },
        }

        console.log(config)

        const {data} = await axios.get(`https://insulink-backend.herokuapp.com/api/v1/dashboard/get-monthly-avg-report/3`,
            config
            )
            
        console.log(data)
        const insulinAverage = data.data.basal.map((bsl,idx)=>{
                    return {
                        avgGlucose:(bsl.avgBasal + data.data.bolus[idx].avgBolus )/2,
                        month:bsl.month,
                        year: bsl.year
                        
                    }
                })
        dispatch({
            type: ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_SUCCESS, 
            payload: {data, insulinAverage}
        })
        console.log('DISPATCH SUCCESS')
    } catch (error) {
        dispatch({
            type: ADMIN_DASH_THREE_MONTH_AVERAGE_INSULIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}

export const deviceStatus = () => async(dispatch) => {
    try {
        dispatch({type:ADMIN_DASH_DEVICE_STATUS_REQUEST});
        console.log('DISPATCH REQ')

        const tokenVal = cookie.load('token');
        console.log(`today insulin action token val: ${tokenVal}`)

        const config = {
            headers: {
                // "Content-type": "application/json",
                'Authorization': `Bearer ${tokenVal}`
            },
        }

        // console.log(config)

        const {data} = await axios.get(`https://insulink-backend.herokuapp.com/api/v1/dashboard/get-updated-device-details`,
            config
            )
            console.log(`device status action data: ${data}`)
        dispatch({
            type: ADMIN_DASH_DEVICE_STATUS_SUCCESS, 
            payload:data
        })
        console.log('DISPATCH SUCCESS: '+ data)
    } catch (error) {
        dispatch({
            type: ADMIN_DASH_DEVICE_STATUS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message,
        })
    }
}
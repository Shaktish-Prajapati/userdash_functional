import React, { useEffect } from 'react'
import './WeekAverageReading.css'
import {Row, Col, ProgressBar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { weekAverage } from '../actions/adminDashboardCardAction'


function WeekAverageReading() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(weekAverage())
    }, [])

    const weekAverageReducer = useSelector(state => state.weekAverageReducer)
    console.log(weekAverageReducer)
    const result = !weekAverageReducer.loading && weekAverageReducer.weekAverageData ?  weekAverageReducer.weekAverageData : null
    console.log(result)
    return (
        <div className="weekAverage">
                    <h3>Your average glucose intake</h3>
                    {
                        result == null ? 'Loading...' : <>
                    <Row>
                        <p>This weeek</p>
                        <div className="progressBarDiv">
                        <ProgressBar  now={result.currentWeek.insulin.avgInsulin} />
                        </div>
                    </Row>
                    <Row>
                        <p>Previous week</p>
                        <div className="progressBarDiv">
                        <ProgressBar variant="success" now={result.currentWeek.insulin.avgInsulin} />
                        </div>
                    </Row> </>
                    }
                </div>
            
    )
}

export default WeekAverageReading

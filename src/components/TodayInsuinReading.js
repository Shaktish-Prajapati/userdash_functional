import React,{useEffect} from 'react'
import './TodayInsulinReading.css'
import {Row, Col} from 'react-bootstrap'
import CircularProgressBar from './CircularProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { todayInsulin } from '../actions/adminDashboardCardAction'

function TodayInsuinReading() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(todayInsulin())
    }, [])

    const todayInsulinReducer = useSelector(state => state.todayInsulinReducer)
    console.log(todayInsulinReducer)
    const result = !todayInsulinReducer.loading && todayInsulinReducer.insulinData ?  todayInsulinReducer.insulinData.data : null
    console.log(result)

    return (
        <div className="todayInsulinAverage">
        <h4>Today's Reading</h4>
        {
            result == null ? 'Loading' : <Row>
            <Col>
            <CircularProgressBar name="Glucose" value={result.glucose} />
            </Col>
            <Col>
            <CircularProgressBar name="Insulin" value={result.insulin} />
            </Col>
            <Col>
            <CircularProgressBar name="Carb" value={result.carb} />
            </Col>
        </Row>
        }
     </div>
    )
}

export default TodayInsuinReading

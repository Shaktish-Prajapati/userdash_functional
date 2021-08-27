import React from 'react'
import './TodayInsulinReading.css'
import {Row, Col} from 'react-bootstrap'
import CircularProgressBar from './CircularProgressBar'

function TodayInsuinReading() {
    return (
        <div className="todayInsulinAverage">
        <h4>Today's Reading</h4>
        <Row>
            <Col>
            <CircularProgressBar name="Glucose" /* value={this.state.glucose} */ />
            </Col>
            <Col>
            <CircularProgressBar name="Insulin" /* value={this.state.insulin} */ />
            </Col>
            <Col>
            <CircularProgressBar name="Carb" /* value={this.state.carb} */ />
            </Col>
        </Row>
     </div>
    )
}

export default TodayInsuinReading

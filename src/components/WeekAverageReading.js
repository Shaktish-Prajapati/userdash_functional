import React from 'react'
import './WeekAverageReading.css'
import {Row, Col, ProgressBar} from 'react-bootstrap'


function WeekAverageReading() {
    return (
        <div className="weekAverage">
                    <h3>Your average glucose intake</h3>
                    <Row>
                        <p>This weeek</p>
                        <div className="progressBarDiv">
                        <ProgressBar  now={ 50/* this.state.insulinAvgThisWeek */} />
                        </div>
                    </Row>
                    <Row>
                        <p>Previous week</p>
                        <div className="progressBarDiv">
                        <ProgressBar variant="success" now={60/* this.state.insulinAvgPrevWeek */} />
                        </div>
                    </Row>
                </div>
            
    )
}

export default WeekAverageReading

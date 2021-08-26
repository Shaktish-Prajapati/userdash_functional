import React from 'react'
import './dashBoardCardContainer.css'
import {Row,Col} from 'react-bootstrap'

function dashBoardCardContainer() {
    return (
        <div className='cardContainer'>
                <div className="cardAlignment">
                    <h2>Summary</h2>
                <Row>
                    <Col >
                    <div className="cardDesign" >
                        {/* <TodayInsulinReading /> */}
                        <p>Insulin reading today</p>
                    </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        {/* <WeekAverageInsulin /> */}
                        <p>Week average insulin</p>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  className="cardDesign">
                        <p>Week average insulin</p>
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">

                        <p>Week average insulin</p>
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        </div>
                    </Col>
                </Row>
            </div>
                </div>
    )
}

export default dashBoardCardContainer

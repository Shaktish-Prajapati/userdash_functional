import React,{useState, useEffect} from 'react'
import './dashBoardCardContainer.css'
import {Row,Col} from 'react-bootstrap'
import TodayInsuinReading from './TodayInsuinReading'
import { useDispatch, useSelector } from 'react-redux'
import WeekAverageReading from './WeekAverageReading'
import InsulinAverage from './InsulinAverage'
import LastRowSmallCard from './LastRowSmallCard'

function DashBoardCardContainer() {
    const [threemonthAverage, setThreemonthAverage] = useState({
        averageInsulin:null,
        averageGlucose:null,
        basal:null,
        bolus:null
    })

    const multipleDispatch = ()=>{
        dispatch()
    }
    const dispatch = useDispatch()
    useEffect(() => {
        multipleDispatch()
    }, [threemonthAverage])

    return (
        <div className='cardContainer'>
                <div className="cardAlignment">
                    <h2>Summary</h2>
                <Row>
                    <Col >
                    <div className="cardDesign" >
                        {/* <TodayInsulinReading /> */}
                        <p>Insulin reading today</p>
                        <TodayInsuinReading />
                    </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        {/* <WeekAverageInsulin /> */}
                        <p>Week average insulin</p>
                        <WeekAverageReading />

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        <InsulinAverage />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        <InsulinAverage />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  className="cardDesign">
                        <p>Reservoir</p>
                        <LastRowSmallCard />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">

                        <p>Week average insulin</p>
                        <LastRowSmallCard />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        <p>Week average insulin</p>
                        <LastRowSmallCard />
                        </div>
                    </Col>
                </Row>
            </div>
                </div>
    )
}

export default DashBoardCardContainer

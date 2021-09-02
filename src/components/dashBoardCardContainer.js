import React,{useState, useEffect} from 'react'
import './dashBoardCardContainer.css'
import ReservoirIcon from '../assests/water-tower.png'
import Battery from '../assests/battery.png'
import Patch from  '../assests/band-aid.png'
import {Row,Col} from 'react-bootstrap'
import TodayInsuinReading from './TodayInsuinReading'
import { useDispatch, useSelector } from 'react-redux'
import WeekAverageReading from './WeekAverageReading'
import InsulinAverage from './InsulinAverage'
import LastRowSmallCard from './LastRowSmallCard'
import { deviceStatus, threeMonthAverage, todayInsulin } from '../actions/adminDashboardCardAction'

function DashBoardCardContainer() {
    
    const adminDashboardDevice = useSelector(state => state.adminDashboardDevice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(threeMonthAverage())
        dispatch(deviceStatus())
    }, [])

    const result = !adminDashboardDevice.loading && adminDashboardDevice.adminDeviceStatusData ?  adminDashboardDevice.adminDeviceStatusData.data : null

    const threeMonthAverageReducer = useSelector(state => state.threeMonthAverageReducer)
    console.log(threeMonthAverageReducer)

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
                        <InsulinAverage
                        name="Inculin" 
                        avgTitle="Average" 
                        updatedAgo="Updated 2 hr ago" 
                        average='2.2'
                        data={threeMonthAverageReducer.threeMonthAverageData.insulinAverage}
                        // basal={this.state.basal}
                        // bolus={this.state.bolus}
                        barColor='red'
                        />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                        <InsulinAverage
                        name="Glucose" 
                        avgTitle="Average" 
                        updatedAgo="Updated 2 hr ago" 
                        average='2.2'
                        data={threeMonthAverageReducer.threeMonthAverageData.data.data.glucose}
                        // basal={this.state.basal}
                        // bolus={this.state.bolus}
                        barColor='red'
                        />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  className="cardDesign">
                            {/* reservoir */}
                        <LastRowSmallCard 
                        image={ReservoirIcon} 
                        heading='Reservoir' 
                        subHeading='Subheading'
                        data = {result == null ? 'Loading' : result.device.reservoir}
                        />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                            {/* Battery */}
                        <LastRowSmallCard 
                        image={Battery} 
                        heading='Battery' 
                        subHeading='Subheading'
                        data = {result == null ? 'Loading' : result.device.battery}
                        />
                        </div>
                    </Col>
                    <Col >
                        <div className="cardDesign">
                            {/* Pathc */}
                        <LastRowSmallCard 
                        image={Patch} 
                        heading='Patch' 
                        subHeading='Subheading'
                        data = {result == null ? 'Loading' : result.device.patchTimestamp}
                        />
                        </div>
                    </Col>
                </Row>
            </div>
                </div>
    )
}

export default DashBoardCardContainer

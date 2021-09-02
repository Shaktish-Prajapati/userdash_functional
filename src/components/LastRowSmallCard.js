import React, { useEffect } from 'react'
import './LastRowSmallCard.css'
import {Row, Col} from 'react-bootstrap'
import ReservoirIcon from '../assests/water-tower.png'
import { useDispatch } from 'react-redux'


function LastRowSmallCard(props) {
    

    return (
        <div className="deviceInfo">
        <Row>
             <p>{props.heading}</p>
             <br/>
             <small>{props.subHeading}</small>
         </Row>
         <Row>
         <Col className="lastColumnIcon" >
             <img width="50%" height="100%" src={props.image} alt="reservoir icon" />
         </Col>
         <Col className="lastColumnText" >
             <p>{props.data}</p>
         </Col>
         </Row>
     </div>
    )
}

export default LastRowSmallCard

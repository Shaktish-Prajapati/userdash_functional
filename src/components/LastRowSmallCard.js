import React from 'react'
import './LastRowSmallCard.css'
import {Row, Col} from 'react-bootstrap'
import ReservoirIcon from '../assests/water-tower.png'

function LastRowSmallCard() {
    return (
        <div className="deviceInfo">
        <Row>
             <p>Card Title{/* {this.props.headName} */}</p>
             <br/>
             <small>Card explanation{/* {this.props.smallPara} */}</small>
         </Row>
         <Row>
         <Col className="lastColumnIcon" >
             <img width="50%" height="100%" src={ReservoirIcon/* this.props.iconImage */} alt="reservoir icon" />
         </Col>
         <Col className="lastColumnText" >
             <p>card side text{/* {this.props.data} */}</p>
         </Col>
         </Row>
     </div>
    )
}

export default LastRowSmallCard

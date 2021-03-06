import React from 'react'
import './InsulinAverage.css'
import { Row, Col } from 'react-bootstrap'
import {
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer
} from 'recharts'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function InsulinAverage(props) {
    return (
        <div className="insulinAverage">
      
        <Row>
        <Col>
        <Row>
        <h3>
          {props.name}
        </h3>
        </Row>
        <Row>
        <small>
          {/* {this.props.updatedAgo} */}
          Updated 2 hour ago
        </small>
        </Row>
        
        </Col>
        <Col>
        <Row>
        <h3>
          {/* {this.props.avgTitle} */}
          Average
        </h3>
        </Row>
        <Row>
        <small>
          {/* {this.props.average} */}
          2.4
        </small>
        </Row>
        </Col>
        </Row>
        <Row>
        <div style={{backgroundColor:'none', width:'100%',paddingTop:'5%'}} >
        
        <ResponsiveContainer width="100%" height={200}>
        
        <BarChart
        /* width="40%"
        height="40%" */
        data={props.data}
        //   margin={{
        //     top: 5,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="month" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey={'avgGlucose'} fill="#333"/* {this.props.barColor} */ />
        </BarChart>
        
        </ResponsiveContainer>
        </div>
        </Row>
        </div>
    )
}

export default InsulinAverage

import React from 'react'
import './Home.css'
import DashBoardCardContainer from './dashBoardCardContainer'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'

function Home() {
    const adminLoginReducer = useSelector(state => state.adminLoginReducer)
    console.log(adminLoginReducer)
    return (
        <div style={{display:"flex"}} >
            <p>{adminLoginReducer.data}</p>
            <Sidebar className="adminDashboardSidebar" />
            <DashBoardCardContainer className="adminDashCardContainer" />
        </div>
    )
}

export default Home

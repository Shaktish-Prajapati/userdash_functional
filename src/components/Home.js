import React from 'react'
import './Home.css'
import DashBoardCardContainer from './dashBoardCardContainer'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'

function Home() {
    const login = useSelector(state => state.login)
    console.log(login)
    return (
        <div >
            <p>{login.data}</p>
            <Sidebar className="adminDashboardSidebar" />
            <DashBoardCardContainer className="adminDashCardContainer" />
        </div>
    )
}

export default Home

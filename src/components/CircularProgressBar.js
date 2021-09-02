import React from 'react'
import './CircularProgressBar.css'

function CircularProgressBar(props) {
    
    return (
        <div className="" >
            <div  className={`progress-circle p${props.value<0 ? 0 :props.value}`}>
            <span>{props.value<0 ? 0 :props.value}</span>
            <div class="left-half-clipper">
                <div className={`first${props.value<0 ? 0 :props.value}-bar`}></div>
                <div /* ref={this.CircularProgressBarRef} */  class="value-bar"></div>
            </div>
            </div>
            <p className="nameAlign">Insulin Intake</p>
            </div>
    )
}

export default CircularProgressBar

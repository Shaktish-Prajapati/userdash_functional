import React from 'react'
import './CircularProgressBar.css'

function CircularProgressBar() {
    return (
        <div className="" >
            <div  className={`progress-circle p10`}>
            <span>10%</span>
            <div class="left-half-clipper">
                <div className={`first50-bar`}></div>
                <div /* ref={this.CircularProgressBarRef} */  class="value-bar"></div>
            </div>
            </div>
            <p className="nameAlign">Insulin Intake</p>
            </div>
    )
}

export default CircularProgressBar

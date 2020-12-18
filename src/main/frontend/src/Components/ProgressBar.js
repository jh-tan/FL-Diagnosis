import React from 'react'
import '../App.css';

const ProgressBar = ({number}) => {
    return(
        <div id="myProgress">
            <div id = "backBtn" onClick={()=>console.log('asd')}></div>
            <div id = "myBar">
                <div id="currentProgress"></div>
            </div>
            <div id = "progressText">{number}/10</div>
        </div>
    )
}

export default ProgressBar
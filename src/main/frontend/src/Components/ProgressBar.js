import { React,useEffect } from 'react'
import '../App.css';

const ProgressBar = ({qNumber}) => {
    const {setQuesNum, quesNum} = qNumber
    useEffect(()=>{
        document.getElementById("currentProgress").style.width=((quesNum)/17)*100+"%"
    },[quesNum])
    
    const back = () =>{
        setQuesNum(quesNum - 1)
    }
    return(
        <div id="myProgress">
            <div id = "backBtn" onClick={()=>back()}></div>
            <div id = "myBar">
                <div id="currentProgress"></div>
            </div>
            <div id = "progressText">{quesNum}/17</div>
        </div>
    )
}

export default ProgressBar
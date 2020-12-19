import { React,useEffect } from 'react'
import '../App.css';

const ProgressBar = ({qNumber}) => {
    const { setQuesNum,setSlider,setScore, quesNum, slider,currentScore} = qNumber
    useEffect(()=>{
        document.getElementById("currentProgress").style.width=((quesNum)/17)*100+"%"
    },[quesNum])

    const removeAns = ()=>{
        quesNum <=6?
        setScore({...currentScore,score1:currentScore.score1.filter((ans,i)=>i!==quesNum-3)}):
        setScore({...currentScore,score2:currentScore.score2.filter((ans,j)=>j!==quesNum-7)})
    }
    
    const back = () =>{
        return (
            quesNum === 2 ? 
            (setSlider(!slider),
            document.getElementById("backBtn").style.visibility = "hidden",
            setScore({age:'',score1:[],score2:[]}),
            setQuesNum(quesNum - 1))
            : (setQuesNum(quesNum - 1),
                removeAns())
        )
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
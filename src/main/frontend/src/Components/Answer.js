import {React,useState,useEffect} from 'react'
import '../App.css';

const Answer = ({Qanswer}) => {
    const{setQuesNum, setScore, quesNum, currentScore, currentQuestion} = Qanswer
    
    const next = (ans) => {
            quesNum <= 5?
            (ans === "YES" ? setScore({...currentScore,score1:currentScore.score1.concat(1)}):setScore({...currentScore,score1:currentScore.score1.concat(0)})):
            (ans === "YES" ? setScore({...currentScore,score2:currentScore.score2.concat(1)}):setScore({...currentScore,score2:currentScore.score2.concat(0)}))
            
            setQuesNum(quesNum + 1)
            
            document.getElementById("currentProgress").style.width=(quesNum/17)*100+"%"
    }
    return (
        <div>
            <button className="answerBtn" onClick={()=>next("YES")}>{currentQuestion[0]}</button>
            <button className= "answerBtn" onClick={()=>next("NO")}>{currentQuestion[1]}</button>
        </div>
    )
}

export default Answer
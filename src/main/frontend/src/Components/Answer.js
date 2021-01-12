import {React} from 'react'
import '../App.css';

const Answer = ({Qanswer}) => {
    const{setQuesNum, setScore, quesNum, currentScore, currentQuestion} = Qanswer
    
    const next = (ans) => {
    // Adding the input into the respectively array based on the current question number and ans
            quesNum <= 7
            ?((ans === "YES"||ans==="Male") 
                ? setScore({...currentScore,score1:currentScore.score1.concat(1)})
                :setScore({...currentScore,score1:currentScore.score1.concat(0)}))
            :(ans === "YES" 
                ? setScore({...currentScore,score2:currentScore.score2.concat(1)})
                :setScore({...currentScore,score2:currentScore.score2.concat(0)}))
            
            setQuesNum(quesNum + 1)
            
            document.getElementById("currentProgress").style.width=(quesNum/20)*100+"%"
    }

    return (
        <div>
            <button className="answerBtn" onClick={()=>next("YES")}>{currentQuestion[0]}</button>
            <button className= "answerBtn" onClick={()=>next("NO")}>{currentQuestion[1]}</button>
        </div>
    )
}

export default Answer
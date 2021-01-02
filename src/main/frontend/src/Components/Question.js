import {React,useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css';
import Answer from './Answer';
import Result from './Result'
import {qna} from './questionBank'

const Question = ({qNumber}) =>{
    const {setQuesNum, setScore,setSlider, currentScore, quesNum} = qNumber
    const question = qna
    const [calculatedResult,setResult] = useState({})
    const currentQuestion = quesNum < 20 ? question[`q${quesNum}`].ans : null
    const calculateScore = () =>{
        const ans = [0,0]
        for(let i of currentScore.score1){
            ans[0]+=i
        }
        ans[0] = ans[0]/5
        for(let i of currentScore.score2)
            ans[1]+=i
        ans[1] = ans[1]/13
        return {age:(currentScore.age<45?0.50:currentScore.age<65?0.7:1.0),score1:ans[0],score2:ans[1]};
    }
    
    useEffect(()=>{
        console.log(currentScore)
        quesNum === 20?axios.post('/api/result',calculateScore(currentScore))
        .then(result=>setResult(result.data)).catch(error=>console.log(error)):console.log('')
    },[currentScore])

    
    return(
        <div>
            {
                quesNum < 20 ?
                <div className="questionBank">
                    <h1>{question[`q${quesNum}`].question}</h1>
                    <Answer Qanswer={{ setQuesNum, setScore, quesNum, currentScore, currentQuestion }} /> 
                </div>
                :
                    <Result result={{ setQuesNum, setSlider,setScore,calculatedResult,currentScore}} />

            }
        </div>
    )
}

export default Question
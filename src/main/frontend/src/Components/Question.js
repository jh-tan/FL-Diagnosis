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
    const currentQuestion = quesNum < 21 ? question[`q${quesNum}`].ans : null
    
    //Function to calculate the score 1 and score 2 by getting the average 
    const calculateScore = () =>{
        const ans = [0,0]
        const reducer = (sum, item) => {
            return sum + item
        }
        ans[0] = currentScore.score1.reduce(reducer,0)/6
        ans[1] = currentScore.score2.reduce(reducer,0)/13
        return {
            age: (currentScore.age <= 45 ? 0.50 : currentScore.age <= 65 ? 0.7 : 1.0),
            score1: ans[0],
            score2: ans[1]
        }
    }
    
    useEffect(()=>{
        console.log(currentScore)
        quesNum === 21
        &&axios.post('/api/result',calculateScore(currentScore))
                .then(result => setResult(result.data))
                .catch(error => console.log(error))
    },[currentScore])

    
    return(
        <div>
            {
                quesNum < 21 ?
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
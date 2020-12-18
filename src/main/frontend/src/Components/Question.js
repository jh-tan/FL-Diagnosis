import {React,useState} from 'react'
import axios from 'axios'
import '../App.css';
import Answer from './Answer';

const qna = {
    q2:{
        question:"Are you a passive smoker",
        ans:["Yes","No"]
    },
    q3:{
        question:"Did you expose to any asbestos or other pollutants",
        ans:["Yes","No"]
    },
    q4:{
        question:"Did you expose to any radon",
        ans:["Yes","No"]
    },
    q5:{
        question:"Did you have any family history with lung cancer?",
        ans:["Yes","No"]
    },
    q6:{
        question:"Did you have a cough that does not go away or get worse?",
        ans:["Yes","No"]
    },
    q7:{
        question:"Did you have any chest pain?",
        ans:["Yes","No"]
    },
    q8:{
        question:"Is your voice hoarse?",
        ans:["Yes","No"]
    },
    q9:{
        question:"Are you suffering weight loss and loss of appetite?",
        ans:["Yes","No"]
    },
    q10:{
        question:"Did you suffer from coughing up blood?",
        ans:["Yes","No"]
    },
    q11:{
        question:"Did you keep feeling fatigue?",
        ans:["Yes","No"]
    },
    q12:{
        question:"Did you have any infections such as bronchitis that don't go away or keep coming back?",
        ans:["Yes","No"]
    },
    q13:{
        question:"Did you wheeze?",
        ans:["Yes","No"]
    },
    q14:{
        question:"Did you suffer from any bone pain?",
        ans:["Yes","No"]
    },
    q15:{
        question:"Did you notice any nervous system changes (such as headache,dizziness, balance problems or numbness of an arm or leg)",
        ans:["Yes","No"]
    },
    q16:{
        question:"Did you notice any yellowing of the skin and eyes (jaundice)",
        ans:["Yes","No"]
    },
    q17:{
        question:"Did you notice any lumps near the surface of the body?",
        ans:["Yes","No"]
    },
}

const Question = ({qNumber}) =>{
    const {setQuesNum, setScore, currentScore, quesNum} = qNumber
    const [question,setQuestion] = useState(qna)
    const currentQuestion = quesNum<=17?question[`q${quesNum}`].ans:null;
    const calculateScore = (score) =>{
        const ans = [0,0]
        for(let i of currentScore.score1){
            ans[0]+=i
        }
        ans[0] = ans[0]/4
        for(let i of currentScore.score2)
            ans[1]+=i
        ans[1] = ans[1]/12
        return {age:0.5,score1:ans[0],score2:ans[1]};
    }
    // axios.post('http://localhost:8080/api/result',calculateScore(currentScore))
    return(
        <div>
            {
            quesNum < 18 ?
            <div>
                {<h1>{question[`q${quesNum}`].question}</h1>}
                <Answer Qanswer={{ setQuesNum, setScore, quesNum, currentScore, currentQuestion }} /> 
            </div>:
            <h1>aaa</h1>
            }
        </div>
    )
}

export default Question
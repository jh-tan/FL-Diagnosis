import {React} from 'react'
import {qna} from './questionBank'
import '../App.css';

const Result = ({ result }) =>{
    document.getElementById("myProgress").style.display="none"
    const { setQuesNum, setSlider,setScore,calculatedResult,currentScore } = result
    
    const reset = () =>{
        document.getElementById("myProgress").style.display="flex"
        document.getElementById("backBtn").style.visibility="hidden"
        setQuesNum(1)
        setSlider(true)
        setScore({age:'',score1:[],score2:[]})
    }
    const userScore = currentScore.score1.concat(currentScore.score2)
    return(
        <div className="resultContainer">
                <h1>The probability of you getting lung cancer is {calculatedResult.possibilities} which is </h1>
                <h1 id="calculatedAnswer">{calculatedResult.answer}</h1>
                <div className="tableContainer">
                    <h2>Your Answer</h2>
                    <p>The results are based upon how you answered the following questions:</p>
                    <table id="resultTable">
                        <tbody>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                            </tr>
                            <tr>
                                <td>Your age</td>
                                <td id="tableAns">{currentScore.age}</td>
                            </tr>
                            {
                                userScore.map((item,index)=>{
                                    return(
                                        <tr key={index + 2}>
                                            <td>{qna[`q${index+2}`].question}</td>
                                            {item===0?<td id="tableAns">No</td>:<td id="tableAns">Yes</td>}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <i>Disclaimer: This result does not provide a definitive diagnosis but 
                        only estimates the probability of a lung cancer being present or absent.
                        For more accurate diagnosis result, please head to the hospital for tht test.
                    </i>
                </div>
                <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Result
import {React} from 'react'
import '../App.css';

const Result = ({ result }) =>{
    document.getElementById("myProgress").style.display="none"
    const { setQuesNum, setSlider,setScore,calculatedResult } = result
    const reset = () =>{
        document.getElementById("myProgress").style.display="flex"
        document.getElementById("backBtn").style.visibility="hidden"
        setQuesNum(1)
        setSlider(true)
        setScore({age:'',score1:[],score2:[]})
    }
    return(
        <div className="resultContainer">
            <h1>The probability of you getting lung cancer is {calculatedResult}</h1>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Result
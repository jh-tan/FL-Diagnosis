import {React,useState} from 'react'
import '../App.css';

const Slider = ({status}) =>{
    const [age,setAge] = useState('')
    const { setSlider, setQuesNum, setScore, quesNum, currentScore } = status
    const next = () => {
        document.getElementById("ageNext").style.display="none";
        document.getElementById("backBtn").style.visibility="visible";
        setQuesNum(quesNum+1);
        document.getElementById("currentProgress").style.width=(quesNum/17)*100+"%"
        setSlider(false)
        setScore({...currentScore,age:age})
    }
    return(
        <div id="getAge">
            <h1>Please tell us about your age</h1>
            <h3>{age===''?`Your age is ${age}`:`Your age is ${age} years old`}</h3>
            <input type="range" min="0" max="90" className="slider" id="myRange" onInput={()=>setAge(`${document.getElementById("myRange").value}`)}></input>
            <button id="ageNext" disabled={age===''?true:false} onClick={next}>NEXT</button>
        </div>
    )
}


export default Slider
import {React,useState} from 'react'
import '../App.css';

const Slider = ({status}) =>{
    const [age,setAge] = useState('')
    const {setSlider,setQuesNum,quesNum} = status
    const next = () => {
        document.getElementById("ageNext").style.display="none";
        document.getElementById("backBtn").style.visibility="visible";
        document.getElementById("currentProgress").style.width=15+"%"
        setSlider(false)
        setQuesNum(quesNum+1);
    }
    return(
        <div id="getAge">
            <h1>Please tell us about your age</h1>
            <h3>Your age is {age}</h3>
            <input type="range" min="0" max="90" className="slider" id="myRange" onInput={()=>setAge(`${document.getElementById("myRange").value} years old`)}></input>
            <button id="ageNext" disabled={age===''?true:false} onClick={next}>NEXT</button>
        </div>
    )
}


export default Slider
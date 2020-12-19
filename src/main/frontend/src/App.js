import logo from './logo.svg';
import axios from 'axios'
import {useState} from 'react'
import './App.css';
import Nav from './Components/Nav'
import ProgressBar from './Components/ProgressBar'
import Slider from './Components/Slider'
import Question from './Components/Question'

function App() {
  const [slider,setSlider] = useState('true')
  const [quesNum,setQuesNum] = useState(1)
  const [currentScore,setScore] = useState({
        age:'',
        score1:[],
        score2:[]
    })
  return (
    <div className="App">
      <Nav />
      <ProgressBar qNumber={{ setQuesNum,setSlider,setScore, quesNum, slider,currentScore}} />
      {slider ? <Slider status={{ setSlider, setQuesNum,setScore, quesNum,currentScore }} /> : null}
      {!slider ? <Question qNumber={{ setQuesNum, setScore,setSlider, currentScore, quesNum }} /> : null}
      
    </div>
  );
}

export default App;

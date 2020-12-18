import logo from './logo.svg';
import axios from 'axios'
import {useState} from 'react'
import './App.css';
import Nav from './Components/Nav'
import ProgressBar from './Components/ProgressBar'
import Slider from './Components/Slider'

function App() {
  const baseURL = 'http://localhost:8080/api/result'
  const [slider,setSlider] = useState('true')
  const [quesNum,setQuesNum] = useState(1)
  return (
    <div className="App">
      <Nav />
      <ProgressBar number = {quesNum}/>
      {slider?<Slider status = {{setSlider,setQuesNum,quesNum}}/>:null}
    </div>
  );
}

export default App;

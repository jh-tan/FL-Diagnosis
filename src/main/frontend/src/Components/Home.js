import '../App.css';
import {useState} from 'react'
import ProgressBar from './ProgressBar'
import Slider from './Slider'
import Question from './Question'

const Home = () =>{
    const [slider,setSlider] = useState('true')
    const [quesNum,setQuesNum] = useState(1)
    const [currentScore,setScore] = useState({
            age:'',
            score1:[],
            score2:[]
        })
    return(
        <div>
            <ProgressBar qNumber={{ setQuesNum,setSlider,setScore, quesNum, slider,currentScore}} />
            {slider ? <Slider status={{ setSlider, setQuesNum,setScore, quesNum,currentScore }} /> : null}
            {!slider ? <Question qNumber={{ setQuesNum, setScore,setSlider, currentScore, quesNum }} /> : null}
        </div>
    )
}

export default Home;
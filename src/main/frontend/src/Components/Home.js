import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

const Home = () =>{
    return(
        <div className="landing-bg">
            <div className="bg-text">
                <h1>Lung Cancer Diagnosis Expert System</h1>
                <p>Lung cancer is one of the most deadly cancer and it is also one of the most
                    common cancers in Malaysia. If lung cancer is found early, 
                    the cancerous cell is still small and before it has spread, 
                    it is more likely to be successfully treated.
                </p>
                <h3>Don't risk you life and start to do the test now </h3>
                <Link to="/diagnosis">
                    <button>
                        Diagnose Now
                    </button>
                </Link>
            </div>
            <Particles height="100vh" id="ts-particles"
                params={{ 
                particles: { 
                    number: { 
                    value: 200, 
                    density: { 
                        enable: true, 
                        value_area: 1000, 
                    } 
                    }, 
                } 
                }} 
            /> 
        </div>
    )
}

export default Home;
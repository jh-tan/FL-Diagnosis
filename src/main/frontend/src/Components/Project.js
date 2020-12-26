import React from 'react'
import inference from '../img/inference.png'

const Project = ()=>{
    return (
        <div className="projectContainer">
            <h1>About This Project</h1>
            <img src={inference}/>
            <div className="projectDetail">
                <h1>What is the purpose of this system</h1>
                <p>
                    This system can diagnose lung cancer based on risk factor and symptoms. This
                    system provides the probability of getting lung cancer. The process of diagnosing 
                    lung cancer cannot be carried out with incomplete information, so this
                    expert systems require intelligent inference techniques to make decisions with high accuracy.
                </p>
                <h1>How does this system work</h1>
                <p>
                    Fuzzy logic is used in this expert system. Fuzzy may considered as 
                    forward - chaining as it is data driving inferencing process. In fuzzy inference
                    process, it begin with crisp numbers constrained. For this system, the crisp value
                    are age and score1 ( risk factor ), both double from 0 to 1. The system then return 
                    first output in defuzzified form using centroid method. Next, a crisp score between 
                    0 to 1 is generated using binary variables of patient's symptoms. Finally, the first
                    defuzzified output and the crisp score about patient's symptoms are used to produce 
                    the final result of the system. Defuzzification in this step is also based on centroid 
                    method and the obtained value shows the probability of lung cancer.
                </p>
                <p>
                    All rules are evaluated by apply fuzzy operator on the antecedent and also implication method. 
                    Implication method means weighting consequent with antecedent(a single number). 
                </p>
            </div>
        </div>
    )
}

export default Project
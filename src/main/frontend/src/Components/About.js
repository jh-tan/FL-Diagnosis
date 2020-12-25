import Collapsible from './Collapsible'
import '../App.css';

const About = ()=>{
    return (
        <div className="aboutContainer">
            <h1 id="aboutTitle">More about Lung Cancer</h1>
            <Collapsible label="What is lung cancer">
                <h1>What is lung cancer</h1>
                <p>
                    Cancer is a disease where the cells in the body mutated and grow out of control.
                    When cancer starts in the lungs, it is called lung cancer. The cancerous cell
                    may spread from the lung to the other organs in the body and cancer from 
                    other organs also may spread to the lungs. When cancer cells spread to the other
                    organ, this is known as <i>metastases</i>.
                </p>
                <p>
                    Lung cancer is mainly divided into small cell lung cancer and non-small cell 
                    lung cancer. These types of lung cancer grow and treated differently.
                    Doctors use a microscope to observe the morphology of cells to confirm 
                    the type of lung cancer. Non-small cell lung cancer is more common than 
                    small cell lung cancer.
                </p>
                <h2>Non-small cell lung cancer</h2>
                <p>
                    Non-small cell lung cancer is more common of the two types of lung cancer,
                    accounting for approximately 80% of all cases and is less malignant
                    than small cell lung cancer. It can be further classified into subtypes:
                </p>
                    <ul>
                        <li>
                            Adenocarcinoma – The most common subtype, which is slow growing 
                            and usually will secrete substances such as mucus. This type of lung
                            cancer mainly occurs in current or former smokers.
                        </li>
                        <li>
                            Squamous cell carcinoma – A very slow growing form of non-small cell 
                            lung cancer that often develops in one of the lungs' airways (bronchi)
                        </li>
                        <li>
                            Large cell carcinoma – The most uncommon subtype of non-small cell lung cancer
                            , which is fast growing, more likely to spread and is very similar to small
                            cell lung cancer
                        </li>
                    </ul>
                <h2>Small cell lung cancer</h2>
                <p>
                    Small cell lung cancer grows quickly and spreads quickly to other parts of the body through 
                    blood vessels and lymph. Generally, patients are already at an advanced stage when 
                    they are diagnosed with this cancer. Treatment is usually chemotherapy, 
                    or a combination of chemotherapy and radiation therapy.
                </p>
            </Collapsible>
            <Collapsible label="Risk factor of lung cancer">
            <h1>Risk factor of lung cancer</h1>
                <p>
                    A risk factor is anything that increases a person's chance of getting a disease
                    such as cancer. The risk factors may be different based on the type of cancers.
                    Some risk factors, like excessive alcohol consumption, can be changed while the
                    genetic can't be changed.
                </p>
                <p>But having a risk factor or even several, does not mean that one will definitely get the
                    disease. And some even get the disease without having a risk factor.
                </p>
            <h2>Smoking</h2>
            <p>Cigarette smoking is by far the leading risk factor for lung cancer. In Malayisa, more than
                90% of male lung cancer patients have a significant smoking history. Smoking cigarettes 
                contribute 15 to 30 times more likesly to get lung cancer than people who do not smoke
            </p>
            <h2>Secondhand Smoke</h2>
            <p>A relative risk of developing lung cancer from passive smoking was found to be 1.14 to 5.20
                in people who had never smoked but breathes in secondhand smoke.
            </p>
            <h2>Exposure to radon</h2>
            <p>Radon, a naturally occurring carcinogen, is among the risk factors linked with lung 
                cancer. Outdoors, there is so little radon that it is not likely to be dangerous. But
                indoors, radon can be more concentrated. Breathing it in exposes your lungs to 
                small amounts of radiation. This may increase a person’s risk of lung cancer.
            </p>
            <h2>Air pollution</h2>
            <p>
                In cities, air pollution be it haze or pollutant that release by the vehicle appear
                to raise the risk of lung cancer slightly. This risk is far less than the risk caused
                by smoking.
            </p>
            <h2>Genetic reason or family history of lung cancer</h2>
            <p>
                Personal or family history of lung cancer serves as a risk factor for a person to 
                develop lung cancer. The are certain genes and chromosomes that have been linked to an 
                increased risk of lung cancer.
            </p>
            </Collapsible>
            <Collapsible label="Symptoms of lung cancer">
                <h1>Symptoms of lung cancer</h1>
                <p>
                    Symptoms of lung cancer can be shown differently on different people. If the cancerous
                    cell has spread to the other parts of the body <i>metastasized</i>, it may have
                    symptoms specific to that part of the body. Some people with lung cancer don't have
                    symptoms until the cancer is in late stage. Lung cancer symptoms may include:
                </p>
                    <ul>
                        <li>Cough that get worse or doesn't go away</li>
                        <li>Chest pain</li>
                        <li>Shortness of breath</li>
                        <li>Wheezing</li>
                        <li>Coughing up blood</li>
                        <li>Hoarseness</li>
                        <li>Always feeling fatigue</li>
                        <li>Weight loss with no known cause</li>
                        <li>Swollen or enlarged lymph nodes</li>
                        <li>Frequent numbness of an arm or leg</li>
                    </ul>
            </Collapsible>
            <Collapsible label="Ways to reduce the risk">
                <h1>Ways to reduce the risk of lung cancer</h1>
                <p>Even though there is no guarantee of not getting lung cancer, but
                    one can reduce the risk of lung cancer in the following ways:
                </p>
                <ul>
                    <li>Don't smoke</li>
                    <li>Avoid secondhand smoke</li>
                    <li>Test your home for radon</li>
                    <li>Exercise regularly</li>
                    <li>Eating a healthy diet</li>
                </ul>
            </Collapsible>
            <Collapsible label="Treatment for lung cancer">
                <h1>Lung cancer treatment</h1>
                <p>
                    The treatment goal of lung cancer depends on its stage. For early-stage patients, 
                    treatment can be the goal of recovery; for late-stage patients, treatment is to 
                    control the condition, prolong life or reduce their discomfort symptoms, so as to 
                    improve the quality of life. 
                </p>
                <p>
                    People with non-small cell lung cancer can be treated with surgery, chemotherapy, 
                    radiation therapy, targeted therapy, or a combination of these treatments. 
                    People with small cell lung cancer are usually treated with radiation therapy and chemotherapy.
                </p>
                <ul>
                    <li>
                        <b>Surgery - </b>
                        The tissue containing the tumor and the surrounding lymph nodes will be removed.
                    </li>
                    <li>
                        <b>Radiation therapy - </b>
                        Uses high - energy rays to kill cancer cells.
                    </li>
                    <li>
                        <b>Chemotherapy - </b>
                        Chemotherapy uses anti - cancer drugs to shrink or kill cancer cells. 
                        It is usually administered through intravenous infusion. The drugs 
                        enter the bloodstream and affect cancer cells throughout the body.
                    </li>
                    <li>
                        <b>Targeted therapy - </b>
                        Targeted therapy uses drugs to inhibit the growth and spread of cancer cells.
                    </li>
                    <li>
                        <b>Immunotherapy - </b>
                        Immunotherapy refers to a cancer treatment method that aims to strengthen 
                        the body's immune system to fight cancer cells.
                    </li>
                </ul>
            </Collapsible>
        </div>
    )
}

export default About
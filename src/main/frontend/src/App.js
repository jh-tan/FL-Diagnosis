import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import About from './Components/About'
import Home from './Components/Home'
import Project from './Components/Project'
import Diagnosis from './Components/Diagnosis'


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>
          <Route path="/diagnosis" component={Diagnosis}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

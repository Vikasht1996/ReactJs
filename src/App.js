import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Cyclemethods from './Task1/Cyclemethods';
import Classcomponent1 from './Task2/Classcomponent1';
import Signup from './Task1/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Signup}></Route>
          <Route exact path='/task1' component={Cyclemethods}></Route>
          <Route exact path='/task2' component={Classcomponent1}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

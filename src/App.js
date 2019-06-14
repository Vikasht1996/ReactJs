import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Cyclemethods from './Task1/Cyclemethods';
import Classcomponent1 from './Task2/Classcomponent1';
import Signup from './Task1/Signup';
import Setstatebind from './Exapmlesdemo/Setstatebind';
import Arithemeticoperation from './Task3/Arithemeticoperation';
import Arrowfunonchange from './Exapmlesdemo/Arrowfunonchange';
import Functionevents from './Task4/Functionevents';
import Restful from './Exapmlesdemo/Restful';
import Restfulltask1 from './Task5/Restfulltask1';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Signup}></Route>
          <Route exact path='/task1' component={Cyclemethods}></Route>
          <Route exact path='/task2' component={Classcomponent1}></Route>
          <Route exact path='/example1' component={Setstatebind}></Route>
          <Route exact path='/example2' component={Arrowfunonchange}></Route>
          <Route exact path='/example3' component={Restful}></Route>
          <Route exact path='/task3' component={Arithemeticoperation}></Route>
          <Route exact path='/task4' component={Functionevents}></Route>
          <Route exact path='/task5' component={Restfulltask1}></Route>

        </Switch>
      </Router>
    </div>
  );
}
export default App;


// import React, { Component } from 'react';
// import User from './components/User';
// import UniqueID from 'react-html-id';
// class App extends Component {

// constructor(){
// super();
// UniqueID.enableUniqueIds(this);
// this.state = {
// users:[
// {id:this.nextUniqueId(), name:'John', age:20},
// {id:this.nextUniqueId(), name:'Jill', age:30},
// {id:this.nextUniqueId(), name:'Peter', age:40},
// ]
// };

// console.log(this.state)
// }
// deleteUser = (index, e) => {
// debugger
// console.log(this.nextUniqueId())
// const users = Object.assign([], this.state.users);
// users.splice(index, 1);

// this.setState({users:users});
// }

// changeUserName = (id, event) => {
// if (event.target.value.length === 0) {
// return;
// }
// const index = this.state.users.findIndex((user)=> {
// return (user.id === id);
// })

// const user = Object.assign({}, this.state.users[index]);
// user.name = event.target.value;

// const users = Object.assign([], this.state.users);
// users[index] = user;

// this.setState({users:users});
// }

// render(){

// return (
// <div>
// <ul>
// {
// this.state.users.map((user, index) => {
// return (<div><User
// delEvent={this.deleteUser.bind(this,index)}
// age={user.age}
// changeEvent={this.changeUserName.bind(this, user.id)}
// key={user.id } >{user.name}</User></div>)
// })
// }
// </ul>
// </div>
// )
// }
// }
// export default App;



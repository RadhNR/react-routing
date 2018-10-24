import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Login from './app/components/Login';
import Register from './app/components/Register';
import AllCourses from './app/components/AllCourses';
import PageNotFound from './app/components/PageNotFound';
import WithParam from './app/components/WithParam';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/allCourses"> All Courses </Link>
            <Link to="/inlineComp"> Inline Component </Link>
            <Link to="/withParam/123"> WithParam</Link>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/allCourses" component={AllCourses} />
              <Route path="/inlineComp" render= {()=> {return (<div>Hello i am inline component</div>)}}/>
              <Route path="/withParam/:id" component={WithParam} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

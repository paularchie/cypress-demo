import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import TestComponent1 from './Components/TestComponent1';
import TestComponent2 from './Components/TestComponent2';

function App() {
  return (
    <>

      <BrowserRouter>
        <Link to='/test_1' data-testid='component_1_link'>Test Component 1</Link>   
        <Link to='/test_2' data-testid='component_2_link'>Test Component 2</Link>
        <Switch>
          <Route path='/test_1' component={TestComponent1} />
          <Route path='/test_2' component={TestComponent2} />
          <Route path='/' exact component={TestComponent1} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

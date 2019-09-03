import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './components/List'
import Error from './components/Error'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/404" exact component={ Error }></Route>
          <Route path="/" component={ List }></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

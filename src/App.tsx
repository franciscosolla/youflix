import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/AddVideo';
import AddCategory from './pages/AddCategory';

function App() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/add/video' component={AddVideo} />
        <Route exact oath='/add/category' component={AddCategory} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

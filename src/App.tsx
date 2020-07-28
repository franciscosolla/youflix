import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/AddVideo';
import AddCategory from './pages/AddCategory';


// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
const Pagina404 = () => (<div>Página 404</div>)

function App() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/add/video' component={AddVideo} />
        <Route exact oath='/add/category' component={AddCategory} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

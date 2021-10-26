import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>Hats</div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/hats'} component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;

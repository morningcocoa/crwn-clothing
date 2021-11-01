import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const HatsPage = () => (
  <div>Hats</div>
);

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop'} component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;

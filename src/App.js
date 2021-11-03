import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>Hats</div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>s
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop'} component={ShopPage} />
          <Route exact path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;

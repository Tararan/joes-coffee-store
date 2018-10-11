import React, { Component } from 'react';
import './styles/App.scss';

import Header from './Header/HeaderContainer';
import { headerContent } from './Header/headerContent';

import Nav from './Nav/NavContainer';
import { navContent } from './Nav/navContent';

import Main from './Main/MainContainer';
import { mainContent } from './Main/mainContent';

import Aside from './Aside/AsideContainer';
import { asideContent } from './Aside/asideContent';

// import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerContent = { headerContent } />
        <Nav navContent = { navContent } />
        <section className="container" id="content">
          <div className="row">
            <Main mainContent = { mainContent } />
            <Aside asideContent = { asideContent }/>
          </div>
          <div className="row">
            {/* <Products productsContent = { productsContent } /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default App;

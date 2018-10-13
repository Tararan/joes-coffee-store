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

// import Products from './Products/Products';
import ProductsContainer from './Products/ProductsContainer';
import { productsContent } from './Products/productsContent';

import Filtering from './Filtering/Filtering';

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: productsContent,
        searchfield: ''
    }
}

searchOnClick = () => {
    const search = document.getElementById('search');
    this.setState({ searchfield: search.value })
    console.log(search.value);
    console.log(search.value.keyCode());
}

  render() {
    const filteredProducts = this.state.products.filter(products => {
      return products.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
  });

  console.log(filteredProducts);
    return (
      <div className="App">
        <Header headerContent = { headerContent } />
        <Nav navContent = { navContent } />
        <section className="container section" id="content">
          <div className="row">
            <Main mainContent = { mainContent } />
            <Aside asideContent = { asideContent }/>
          </div>
          <div className="row">
          <section className="products">
            <h1 className="products__title">
                Coffees
            </h1>
            <Filtering search = { this.searchOnClick }/>
            <ProductsContainer productsContent = { filteredProducts } />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

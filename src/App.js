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

import ProductsContainer from './Products/ProductsContainer';
import { productsContent } from './Products/productsContent';

import Filtering from './Filtering/Filtering';

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: productsContent,
        searchfield: ''
    };
}

onFilterChange = (e) => {
  console.log(e.target.checked);
  {productsContent.map((product) => {
  if(e.target.checked === product.bestSeller ) {
    // return product;
  }
})}
}

onSearchChange = (e) => {
  if (e.key === 'Enter') {
    this.setState({ searchfield: e.target.value });
  }
}

searchOnClick = () => {
    const search = document.getElementById('search');
    this.setState({ searchfield: search.value });
}

  render() {
    let filteredProducts = this.state.products.filter(products => {
      const bestsellers = document.getElementById('bestsellers');
      if (products.bestSeller === true) {
        console.log('products.bestSeller: ' + products.bestSeller + ' bestsellers: ' + bestsellers);
        return products;
      } 
      if (products.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase())) {

        return products;
      } 
  });

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
            <Filtering 
            search = { this.searchOnClick } 
            searchChange = { this.onSearchChange } 
            handleFilter = {this.onFilterChange}
            />
            <ProductsContainer productsContent = { filteredProducts } />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

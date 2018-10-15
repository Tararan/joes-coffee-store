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
  this.setState({ checked: !this.state.isActive })
  let bestsellerProduct = [];
  bestsellerProduct.push(productsContent) ;
  console.log(bestsellerProduct);
  console.log(productsContent);
/*   if(e.target.checked === true) {
    console.log('checked');
    {
      productsContent.map((product, i) => {
        if(product.bestSeller ) {
          bestsellerProduct.push(product);
          console.log(bestsellerProduct);
          return bestsellerProduct;
        } 
      })
    }
  } */
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
    const filteredProducts = this.state.products.filter(products => {
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
            filterChange = { this.onFilterChange }
            />
            <ProductsContainer productsContent = { filteredProducts }  />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

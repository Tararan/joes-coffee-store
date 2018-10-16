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
        searchfield: '',
        isActive: ''
    };
}

/* onFilterChange = (e) => {
  if(e.target.checked) { this.setState({ isActive: "checked" });};
  if(!e.target.checked) { this.setState({ isActive: "" });};
  // console.log(e.target.checked);
} */

onfilterbestSeller = (e) => {
  if(e.target.defaultChecked) { this.setState({ isActive: "filterbestSeller" });};
  if(!e.target.defaultChecked) { this.setState({ isActive: "" });};
  console.log(e.target.defaultChecked);
}

onSearchChange = (e) => {
  if (e.key === 'Enter') { this.setState({ searchfield: e.target.value }); }     
}

searchOnClick = () => {
    const search = document.getElementById('search');
    this.setState({ searchfield: search.value });
}

  render() {
/*   const bestSeller = document.getElementById('bestSeller');
  if(bestSeller.checked === null) {
    return;
    console.log('Null');
    return;
  } */
  // console.log(bestSeller.checked);
  console.log(this.state.isActive);
    const filteredProducts = this.state.products.filter(item => {
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if (searchedItem && !this.state.isActive && searchedItem) {
        return item;
      } 
      if((this.state.isActive && searchedItem && !item.bestSeller)) {
        console.log(item);
        console.log(this.state.isActive);
        return item;
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
            filterbestSeller = { this.onfilterbestSeller }
            filterdiscountPrice = { this.onfilterdiscountPrice }
            filteravailable = { this.onfilteravailable }
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

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
// import Products from './Products/Products';
import { productsContent } from './Products/productsContent';

import Filtering from './Filtering/Filtering';

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: productsContent,
        searchfield: '',
        isfilterbestSeller: false,
        isfilterdiscountPrice: false,
        isfilteravailable: false
    };
}

onfilterbestSeller = (e) => {
  this.setState({ isfilterbestSeller: !this.state.isfilterbestSeller });
  // e.target.prop('checked', true);
  console.log(e.target.id);
}
onfilterdiscountPrice = () => {
  this.setState({ isfilterdiscountPrice: !this.state.isfilterdiscountPrice });
}
onfilteravailable= () => {
  this.setState({ isfilteravailable: !this.state.isfilteravailable});
}

onfilterbestSeller = () => {
  this.setState({ isfilterbestSeller: !this.state.isfilterbestSeller });
}

onSearchChange = (e) => {
  if (e.key === 'Enter') { this.setState({ searchfield: e.target.value }); }     
}

searchOnClick = () => {
    const search = document.getElementById('search');
    this.setState({ searchfield: search.value });
}

  render() {
    const filteredProducts = this.state.products.filter(item => {
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if(!this.state.isfilterdiscountPrice && !this.state.isfilterbestSeller && !this.state.isfilteravailable){
        if((searchedItem)){
          return item;
        }
      }
      /* 
        Individual filters
      */
      if(this.state.isfilterbestSeller) {
        if((searchedItem && this.state.isfilterbestSeller && item.bestSeller)
        || (searchedItem && !this.state.isfilterbestSeller)
        ){
          return item;
        } 
      }

      if(this.state.isfilterdiscountPrice) {
        if((searchedItem && this.state.isfilterdiscountPrice && item.discountPrice.length)
        || (searchedItem && !this.state.isfilterdiscountPrice)
          ){
          return item;
        }
    }
      if(this.state.isfilteravailable) {
      if((searchedItem && this.state.isfilteravailable && item.available)
      || (searchedItem && !this.state.isfilteravailable)
      ){
        return item;
      } 
    }
    /* 
    isfilterbestSeller && isfilterdiscountPrice
    */
  /*   if(this.state.isfilterbestSeller && this.state.isfilterdiscountPrice ) {
      if((searchedItem && item.bestSeller && item.discountPrice.length)
      || (searchedItem && !this.state.isfilterbestSeller)
      ){
        return item;
      }
    } */

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
              filterAll= { this.onfilterAll }
              filterbestSeller = { this.onfilterbestSeller }
              filterdiscountPrice = { this.onfilterdiscountPrice }
              filteravailable = { this.onfilteravailable }
            />
            <ProductsContainer 
              productsContent = { filteredProducts }
            />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

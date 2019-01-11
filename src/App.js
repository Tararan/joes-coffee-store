import React, { Component } from 'react';
import scrollingFunction from './scrollingFunction';
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

scrollingFunction();

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

onfilterbestSeller = () => {
  this.setState({ isfilterbestSeller: !this.state.isfilterbestSeller });
}
onfilterdiscountPrice = () => {
  this.setState({ isfilterdiscountPrice: !this.state.isfilterdiscountPrice });
}
onfilteravailable= () => {
  this.setState({ isfilteravailable: !this.state.isfilteravailable});
}

onSearchChange = (e) => {
  if (e.key === 'Enter') { this.setState({ searchfield: e.target.value }); }     
}

searchOnClick = () => {
    const search = document.getElementById('search');
    this.setState({ searchfield: search.value });
}

addToCart = (e) => {
  console.log(e.target.boxTitle);
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
    if(this.state.isfilteravailable) {
        if(!this.state.isfilterbestSeller && !this.state.isfilterdiscountPrice) {
          if(searchedItem && item.available){
            return item;
          }
        }
        if(this.state.isfilterbestSeller && this.state.isfilteravailable) {
          if(searchedItem && item.bestSeller && item.available && this.state.isfilteravailable){
            return item;
          } 
        }
        if(this.state.isfilterdiscountPrice && this.state.isfilteravailable) {
          if(searchedItem && item.discountPrice.length && item.available && this.state.isfilteravailable){
            return item;
          }
        }
    }   
    else {
        if(this.state.isfilterbestSeller && !this.state.isfilteravailable) {
          if(searchedItem && item.bestSeller){
            return item;
          } 
        }
        if(this.state.isfilterdiscountPrice && !this.state.isfilteravailable) {
          if(searchedItem && item.discountPrice.length){
            return item;
          }
        }
    }
  });
  
  return (
      <div className="App">
        {/* <Overlay productsContent = { productsContent } /> */}
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
              addToCart = { this.addToCart }

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

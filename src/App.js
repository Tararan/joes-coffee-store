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

import Overlay from './Overlay/Overlay';

scrollingFunction();

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: productsContent,
        searchfield: '',
        isfilterbestSeller: false,
        isfilterdiscountPrice: false,
        isfilteravailable: false,
        isOpen: true
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

/* addToCart = (e) => {
  console.log(e.target.boxTitle);
} */

toggleBlur = () => {
  const article = document.getElementsByTagName('article');
  const sidebar = document.getElementsByTagName('aside');
  const nav = document.getElementsByClassName('Nav');
  const body = document.getElementsByTagName('body')[0];
  const productsTitle = document.getElementsByClassName('products__title');
  const blurRepeater = function(element) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle('blur-applied');
    }
  }
  blurRepeater(article);
  blurRepeater(sidebar);
  blurRepeater(productsTitle);
  blurRepeater(nav);
  body.classList.toggle('disable-scrolling');
}

toggleOverlay = (e) => {
  { this.toggleBlur() };
  this.setState({ isOpen: !this.state.isOpen });
  const overlay = document.getElementsByClassName('Overlay')[0];
  const overlayFilling = function (targetEl, destinationEl) {
    const targetHTML = e.target.closest('article').getElementsByClassName(`${targetEl}`)[0].innerHTML;
    overlay.getElementsByClassName(`${destinationEl}`)[0].innerHTML = targetHTML;
  }
  overlay.classList.toggle('Overlay--is-open');
  overlayFilling('products__box-title', 'Overlay__content-title');
  overlayFilling('products__box-title', 'Overlay__description-title');
  overlayFilling('products__description-txt', 'Overlay__description-txt');
}


closeOverlay = () => {
  { this.toggleBlur() };
  const overlay = document.getElementsByClassName('Overlay')[0];
  overlay.classList.toggle('Overlay--is-open');
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
              toggleOverlay= { this.toggleOverlay }
            />
            <Overlay 
              productsContent = { productsContent } 
              closeOverlay= { this.closeOverlay } />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

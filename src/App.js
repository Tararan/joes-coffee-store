import React, { Component } from 'react';
import scrollingFunction from './scrollingFunction';
import toggleBlur from './Overlay/overlayFunctions/toggleBlur';
// import toggleOverlay from './Overlay/overlayFunctions/toggleOverlay';
// import toggleOverlayFuncton from './Overlay/toggleOverlay';
// import fetchProducts from './Products/fetchProducts';
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
      clickedItem: [],
      searchfield: '',
      isfilterbestSeller: false,
      isfilterdiscountPrice: false,
      isfilteravailable: false,
      isOpen: true
    };
  }
  
  toggleOverlay = (e) => {
    { toggleBlur() };
    this.setState({ isOpen: !this.state.isOpen });
    // this
    this.state.products.map(item => {
      // console.log(item.id);
      // console.log(e.target.id);
      
      if(item.id == e.target.id) {
        // clickedItem.push(item);
        console.log(item);
        this.setState({
          clickedItem: item
        });
        // clickedItem.pus
        // console.log(clickedItem);
        // return item;
      }
    });
/*     console.log(this.state.products[0].id);
    console.log(e.target.id); */

 /*    const overlay = document.getElementsByClassName('Overlay')[0];
    const overlayFilling = function (targetEl, destinationEl) {
      if(destinationEl === 'Overlay__content-img') {
        const targetHTML = e.target.closest('article').getElementsByClassName(`${targetEl}`)[0].src;  
        overlay.getElementsByClassName(`${destinationEl}`)[0].src = targetHTML;
      } else {
        const targetHTML = e.target.closest('article').getElementsByClassName(`${targetEl}`)[0].innerHTML;
        overlay.getElementsByClassName(`${destinationEl}`)[0].innerHTML = targetHTML;
      }
    }
    overlay.classList.toggle('Overlay--is-open');
    overlayFilling('products__box-title', 'Overlay__content-title');
    overlayFilling('products__box-title', 'Overlay__content-title');
    overlayFilling('products__box-title', 'Overlay__description-title');
    overlayFilling('products__description-txt', 'Overlay__description-txt');
    overlayFilling('products__box-img', 'Overlay__content-img');
    overlayFilling('products__box-img', 'Overlay__content-img');
    overlayFilling('products__box-price-regular', 'Overlay__content-price-regular');
    overlayFilling('products__box-price-discount', 'Overlay__content-price-discount'); */
  }

  closeOverlay = () => {
    { toggleBlur() };
    this.setState({ isOpen: !this.state.isOpen });
 /*    const overlay = document.getElementsByClassName('Overlay')[0];
    overlay.classList.toggle('Overlay--is-open'); */
  }

onfilterbestSeller = () => {
  this.setState({ isfilterbestSeller: !this.state.isfilterbestSeller });
}
onfilterdiscountPrice = () => {
  this.setState({ isfilterdiscountPrice: !this.state.isfilterdiscountPrice });
}
onfilteravailable = () => {
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
  console.log(e.target.boxtitle);
} */

render() {

  const filteredProducts = this.state.products.filter(item => {
    const searchedItem = item.boxtitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
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
          if(searchedItem && item.bestseller && item.available && this.state.isfilteravailable){
            return item;
          } 
        }
        if(this.state.isfilterdiscountPrice && this.state.isfilteravailable) {
          if(searchedItem && item.discountprice && item.available && this.state.isfilteravailable){
            return item;
          }
        }
    }   
    else {
        if(this.state.isfilterbestSeller && !this.state.isfilteravailable) {
          if(searchedItem && item.bestseller){
            return item;
          } 
        }
        if(this.state.isfilterdiscountPrice && !this.state.isfilteravailable) {
          if(searchedItem && item.discountprice){
            return item;
          }
        }
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
              toggleOverlay = { this.state.isOpen }
              toggleOverlay = { this.state.clickedItem }
              // toggleOverlay = { toggleOverlay.clickedProduct }
              closeOverlay= { this.closeOverlay } />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

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
      if(this.state.isfilterdiscountPrice) {
        console.log('discounts');
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if((searchedItem && this.state.isfilterdiscountPrice && item.discountPrice.length)
      || (searchedItem && !this.state.isfilterdiscountPrice)
        ){
        return item;
      }
    }
/*       if(this.state.isfilterbestSeller) {
        console.log('bestseller');
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if((searchedItem && this.state.isfilterbestSeller && item.bestSeller)
      || (searchedItem && !this.state.isfilterbestSeller)
      ){
        return item;
      } 
    } */

/*     if(this.state.isfilterdiscountPrice) {
      console.log('discounts');
    const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    if((searchedItem && this.state.isfilterdiscountPrice && item.discountPrice.length)
    || (searchedItem && !this.state.isfilterdiscountPrice)
      ){
      return item;
    }
  } */
  });

/*     const filteredProductsBestSeller = this.state.products.filter(item => {
      const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if((searchedItem && this.state.isfilterbestSeller && item.bestSeller)
      || (searchedItem && !this.state.isfilterbestSeller)
      ){
        return item;
      } 
  });
  const filteredProductsDiscountPrice = this.state.products.filter(item => {
    const searchedItem = item.boxTitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
    if((searchedItem && this.state.isfilterdiscountPrice && item.discountPrice.length)
    || (searchedItem && !this.state.isfilterdiscountPrice)
      ) {
      console.log(item.discountPrice.length);
      return item;
    }
  }); */

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
            <ProductsContainer 
            productsContent = { filteredProducts }  
            // productsContent = { filteredProductsDiscountPrice }  
            // productsContent = { filteredProductsBestSeller }  
            />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

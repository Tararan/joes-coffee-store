import React, { Component } from 'react';
import scrollingFunction from './scrollingFunction';
import toggleBlur from './Overlay/overlayFunctions/toggleBlur';
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

import Cart from './Cart/Cart';
import Filtering from './Filtering/Filtering';
import OverlayContainer from './Overlay/OverlayContainer';

scrollingFunction();

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: productsContent,
      clickedItem: [],
      cart: [],
      searchfield: '',
      isfilterbestSeller: false,
      isfilterdiscountPrice: false,
      isfilteravailable: false,
      isOpen: true
    };
  }

  addToCart = (e) => {
    this.state.products.map(item => {
      if (item.id == e.target.closest('.products__box').id) {
        this.setState({
          cart: item
        });
      }
    });
  }

  getClickedProduct = (e) => {
    this.state.products.map(item => {
      if (item.id == e.target.closest('.products__box').id) {
        this.setState({
          clickedItem: item
        });
      }
    });
  }

  toggleOverlay = () => {
    { toggleBlur() };
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeOverlay = () => {
    { toggleBlur() };
    this.setState({ isOpen: !this.state.isOpen });
  }

  onfilterbestSeller = () => {
    this.setState({ isfilterbestSeller: !this.state.isfilterbestSeller });
  }
  onfilterdiscountPrice = () => {
    this.setState({ isfilterdiscountPrice: !this.state.isfilterdiscountPrice });
  }
  onfilteravailable = () => {
    this.setState({ isfilteravailable: !this.state.isfilteravailable });
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
      const searchedItem = item.boxtitle.toLowerCase().includes(this.state.searchfield.toLowerCase());
      if (!this.state.isfilterdiscountPrice && !this.state.isfilterbestSeller && !this.state.isfilteravailable) {
        if ((searchedItem)) {
          return item;
        }
      }
      /* 
        Individual filters
      */
      if (this.state.isfilteravailable) {
        if (!this.state.isfilterbestSeller && !this.state.isfilterdiscountPrice) {
          if (searchedItem && item.available) {
            return item;
          }
        }
        if (this.state.isfilterbestSeller && this.state.isfilteravailable) {
          if (searchedItem && item.bestseller && item.available && this.state.isfilteravailable) {
            return item;
          }
        }
        if (this.state.isfilterdiscountPrice && this.state.isfilteravailable) {
          if (searchedItem && item.discountprice && item.available && this.state.isfilteravailable) {
            return item;
          }
        }
      }
      else {
        if (this.state.isfilterbestSeller && !this.state.isfilteravailable) {
          if (searchedItem && item.bestseller) {
            return item;
          }
        }
        if (this.state.isfilterdiscountPrice && !this.state.isfilteravailable) {
          if (searchedItem && item.discountprice) {
            return item;
          }
        }
      }
    });

    return (
      <div className="App">
        <Header headerContent={headerContent} />
        <Nav navContent={navContent} />
        <Cart addToCart={this.addToCart} />
        <section className="container section" id="content">
          <div className="row">
            <Main mainContent={mainContent} />
            <Aside asideContent={asideContent} />
          </div>
          <div className="row">
            <section className="products">
              <h1 className="products__title">
                Coffees
            </h1>
              <Filtering
                search={this.searchOnClick}
                searchChange={this.onSearchChange}
                filterAll={this.onfilterAll}
                filterbestSeller={this.onfilterbestSeller}
                filterdiscountPrice={this.onfilterdiscountPrice}
                filteravailable={this.onfilteravailable}
              />
              <ProductsContainer
                addToCart={this.addToCart}
                productsContent={filteredProducts}
                toggleOverlay={this.toggleOverlay}
                getClickedProduct={this.getClickedProduct}
              />
            </section>
          </div>
        </section>
        <OverlayContainer
          addToCart={this.addToCart}
          toggleOverlay={this.state.isOpen}
          getClickedProduct={this.state.clickedItem}
          closeOverlay={this.closeOverlay} />
      </div>
    );
  }
}

export default App;
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
    // const isBestseller = this.props.isBestseller;
}

onFilterChange = (e) => {
  // let availabeN = 0;
  this.setState({ checked: !this.state.isActive })
  let bestsellerProduct = [];
  {productsContent.forEach((i) => {
    bestsellerProduct.push(productsContent[i]);
  })}
  // bestsellerProduct.push(productsContent);
/*   console.log('bestsellerProduct');
  console.log(bestsellerProduct);
  console.log('productsContent');
  console.log(productsContent); */
  if(e.target.checked) {
    console.log(e.target.checked);
    {productsContent.map((product, i) => {
        if(product.bestSeller === false) {
          // console.log(product.bestSeller);
          // availabeN = availabeN + 1;
          console.log('productsContent');
          // console.log(product);
          productsContent.splice(i,1);
          // console.log(availabeN);
          // console.log(i);
        } 
      })}
    } else {
      console.log(e.target.checked);
      console.log(productsContent.length);
      // {productsContent.map((product,i) => {
        {bestsellerProduct.forEach((i) => {
          productsContent.push(bestsellerProduct[i]);
        })}
      // })}
    }
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

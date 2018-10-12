import React, { Component } from 'react';
import Products from './Products';
import { productsContent } from './productsContent';

export default class ProductsContainer extends Component {
    render () {
        return(
            <section className="products">
                {productsContent.map((user, i) => {
                    return(
                        <Products key={`Products-key-${i}`} 
                            productsTitle = {user.productsTitle}
                            boxTitle = {user.boxTitle}
                            boxPrice = {user.boxPrice}
                            boxButton = {user.boxButton}
                        />
                    )
                })}
            </section>
        )
    }
}
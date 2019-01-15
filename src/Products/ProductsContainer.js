import React, { Component } from "react";
import Products from "./Products";

class ProductsContainer extends Component {
  render () {
    const { toggleOverlay, productsContent, addToCart } = this.props;
    return (
      <section className="col-md-10" name={`OurCoffees`}>
        {productsContent.map((user, i) => {
          return (
            <Products
              key={`Products-key-${i}`}
              toggleOverlay={toggleOverlay}
              addToCart={addToCart}
              productsTitle={user.productsTitle}
              boxImage={user.boxImage.replace(/\s/g, "")}
              boxTitle={user.boxTitle}
              boxPrice={user.boxPrice}
              discountPrice={user.discountPrice}
              bestSeller={user.bestSeller}
              available={user.available}
              description={user.description}
            />
          );
        })}
      </section>
    )
    }
  }

    export default ProductsContainer;

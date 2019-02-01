import React, { Component } from "react";
import Products from "./Products";

class ProductsContainer extends Component {
  render() {
    const { toggleOverlay, productsContent, getClickedProduct, addToCart } = this.props;
    return (
      <section className="col-md-10" name={`OurCoffees`}>
        {productsContent.map((user, i) => {
          return (
            <Products
              key={`Products-key-${i}`}
              id={user.id}
              addToCart={addToCart}
              toggleOverlay={toggleOverlay}
              getClickedProduct={getClickedProduct}
              productsTitle={user.productsTitle}
              boximage={user.boximage.replace(/\s/g, "")}
              boxtitle={user.boxtitle}
              boxprice={user.boxprice}
              discountprice={user.discountprice}
              bestseller={user.bestseller}
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
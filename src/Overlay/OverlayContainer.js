import React, { Component } from "react";
import Overlay from "./Overlay";

class OverlayContainer extends Component {
  render() {
    const { toggleOverlay, getClickedProduct, closeOverlay, addToCart } = this.props;
    return (
      <section name={`CoffeesOverlay`}>
        <Overlay
          key={`Overlay-key`}
          toggleOverlay={toggleOverlay}
          closeOverlay={closeOverlay}
          addToCart={addToCart}
          id={getClickedProduct.id}
          productstitle={getClickedProduct.productstitle}
          boximage={getClickedProduct.boximage}
          boxtitle={getClickedProduct.boxtitle}
          boxprice={getClickedProduct.boxprice}
          discountprice={getClickedProduct.discountprice}
          bestseller={getClickedProduct.bestseller}
          available={getClickedProduct.available}
          description={getClickedProduct.description}
        />
      </section>
    )
  }
}

export default OverlayContainer;
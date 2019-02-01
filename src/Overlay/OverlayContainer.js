import React, { Component } from "react";
import Overlay from "./Overlay";

console.log('toggleOverlay');
console.log(toggleOverlay);

class OverlayContainer extends Component {
  render () {
    const { toggleOverlay, OverlayContent, addToCart } = this.props;
    return (
      <section className="col-md-10" name={`OurCoffees`}>
        {OverlayContent.map((item, i) => {
          return (
            <Overlay
              key={`Overlay-key-${i}`}
              id={item.id}
              toggleOverlay={toggleOverlay}
              addToCart={addToCart}
              productstitle={item.productstitle}
              boximage={item.boximage.replace(/\s/g, "")}
              boxtitle={item.boxtitle}
              boxprice={item.boxprice}
              discountprice={item.discountprice}
              bestseller={item.bestseller}
              available={item.available}
              description={item.description}
            />
          );
        })}
      </section>
    )
    }
  }

    export default OverlayContainer;
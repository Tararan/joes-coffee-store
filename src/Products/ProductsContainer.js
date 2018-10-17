import React from "react";
import Products from "./Products";

const ProductsContainer = ({ productsContent }) => {
    return (
      <section className="col-md-10">
        {productsContent.map((user, i) => {
          return (
            <Products
              key={`Products-key-${i}`}
              productsTitle={user.productsTitle}
              boxImage={user.boxImage.replace(/\s/g, "")}
              boxTitle={user.boxTitle}
              boxPrice={user.boxPrice}
              discountPrice={user.discountPrice}
              bestSeller={user.bestSeller}
              available={user.available}
            />
          );
        })}
      </section>
    );
    };

    export default ProductsContainer;

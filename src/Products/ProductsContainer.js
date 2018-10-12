import React from "react";
import Products from "./Products";
// import { productsContent } from "./productsContent";

const ProductsContainer = ({ productsContent }) => {
// export default class ProductsContainer extends Component {
//     render() {
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
              boxButton={user.boxButton}
            />
          );
        })}
      </section>
    );
//   }
// }
    };

    export default ProductsContainer;

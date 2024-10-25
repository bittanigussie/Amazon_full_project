import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); 
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard"; // Import the ProductCard component

// function Product() {
//   const [products, setProducts] = useState([]); // Initialize state as an empty array

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data); // Set the products data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="products_container">
//       {products.length > 0 ? (
//         products.map((singleProduct) => (
//           <ProductCard
//             key={singleProduct.id}
//             image={singleProduct.image}
//             title={singleProduct.title}
//             ratingValue={singleProduct.rating.rate}
//             ratingCount={singleProduct.rating.count}
//             price={singleProduct.price}
//             addToCart={() => console.log(`${singleProduct.title} added to cart`)}
//           />
//         ))
//       ) : (
//         <p>Loading products...</p>
//       )}
//     </div>
//   );
// }

// export default Product;

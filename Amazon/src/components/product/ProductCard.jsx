import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../utility/actionType";
import { DataContext } from "../DataProvider/DataProvider"


function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  

   const addToCart = () => {
     dispatch({
       type: Type.ADD_TO_BASKET,
       item: {
         image,
         title,
         id,
         rating,
         price,
         description,
       },
     });
   };
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div>
        <h3>{product.title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={product.rating?.rate || 0} precision={0.1} readOnly />
          {/* count */}
          <small>{product.rating?.count || 0} reviews</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={product.price} />
        </div>
        {renderAdd && <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;

// import React from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../currencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";

// function ProductCard({ product }) {
//   const { image, title, id, rating, price } = product;

//   // const addToCart = () => {
//   //   dispatch({
//   //     type: Type.ADD_TO_BASKET,
//   //     item: {
//   //       image,
//   //       title,
//   //       id,
//   //       rating,
//   //       price,
//   //       description,
//   //     },
//   //   });
//   // };

//   return (
//     <div
//       className={`${classes.card__container
//       }`}
//     >
//       <a href="">
//         <img src={image} alt="" />
//       </a>
//       <div>
//         <h3>{title}</h3>

//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating?.rate} precision={0.1} />
//           {/*count  */}
//           <small>{rating?.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>

//           <button className={classes.button}>
//             add to cart
//           </button>

//       </div>
//     </div>
//   );
// }
// export default ProductCard;


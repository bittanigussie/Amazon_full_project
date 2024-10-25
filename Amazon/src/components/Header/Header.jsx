import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utility/firebase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          {/* other section */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};
export default Header;

// import React, { useContext } from "react"; // Import useContext from React
// // import { DataContext } from "./path/to/DataContext";
// import { Link } from "react-router-dom";
// import classes from "./Header.module.css";
// import LowerHeader from "./LowerHeader";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// function Header() {
//   const [{ user, basket }, dispatch] = useContext(DataContext);
//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   return (
//     <section className={classes.fixed}>
//       <section>
//         <div className={classes.header__container}>
//           {/* logo continer */}
//           <div className={classes.logo__container}>
//             <Link to="/">
//               <img
//                 src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>
//             {/* delivery */}

//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />
//               </span>
//               <p>Deliver To</p>
//               <span>Ethiopia </span>
//             </div>
//           </div>
//           {/* search */}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" name="" id="" placeholder="search product" />
//             <BsSearch size={38} />
//           </div>
//           {/* right sld link */}
//           <div className={classes.order__container}>
//             <div>
//               <Link to="" className={classes.language}>
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
//                   alt=""
//                 />
//                 <section>
//                   <option value="">EN</option>
//                 </section>
//               </Link>
//             </div>
//             {/* three components */}
//             <Link to="/auth">
//               <div>
//                 <p>Sign In</p>
//                 <span>Account & Lists</span>
//               </div>
//             </Link>
//             {/* orders */}
//             <Link to="/orders">
//               <p>returns</p>
//               <span>& Orders</span>
//             </Link>
//             {/* cart */}
//             <Link to={"/cart"} className={classes.cart}>
//               <BiCart size={35} />
//               <span>{totalItem}</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// }

// export default Header;

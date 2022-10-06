// IMPORTING THE HOOKS, COMPONENTS AND STYLE THAT ARE NEEDED FOR THE APP.
/* Importing the useState hook from the react library. */
import { useState, useEffect } from "react";
/* Importing the Banner component from the Banner.js file. */
import Banner from "./Banner";
/* Importing the logo image from the assets folder. */
import logo from "../assets/logo.png";
/* Importing the Cart component from the Cart.js file. */
import Cart from "./Cart";
/* Importing the ShoppingList component from the ShoppingList.js file. */
import ShoppingList from "./ShoppingList";
/* Importing the Footer component from the Footer.js file. */
import Footer from "./Footer";
/* Importing the Layout.css file from the styles folder. */
import "../styles/Layout.css";

// APP
/**
 * - It returns a div with a banner, a cart, a shopping list and a footer.
 * @returns A React component
 */
function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

// EXPORT APP
/* Exporting the App component so that it can be imported in other files. */
export default App;

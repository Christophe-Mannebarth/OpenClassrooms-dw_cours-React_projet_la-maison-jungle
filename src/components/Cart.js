// IMPORT HOOKS AND STYLE
/* Importing the useState and useEffect hooks from the react library. */
import { useState, useEffect } from "react";
/* It's importing the CSS file for the Cart component. */
import "../styles/Cart.css";

// CART
/**
 * React component that renders a cart with a button to toggle its visibility:
 * - Returns a div with a title, 2 buttons,
 *   a list of the plants in the cart and a total price.
 * - The first button is used to toggle the visibility of the cart.
 * - The second button is used to clear the cart.
 * - The total price is calculated by multiplying the price of the item
 *   by the number of items in the cart.
 * - The price of the item is defined by the constant monsteraPrice.
 * - The number of items in the cart is defined by the state cart.
 * - The state cart is updated by the function updateCart.
 * - The function updateCart is called when the button "Ajouter" is clicked.
 * - The function updateCart adds 1 to the state cart.
 * @returns A React component
 */
function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  /* It's displaying an alert when the total changes. */
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

// EXPORT CART
/* It's exporting the Cart component so that it can be imported in another file. */
export default Cart;

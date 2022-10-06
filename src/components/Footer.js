// IMPORT HOOK AND STYLE
/* Importing the useState hook from the react library. */
import { useState } from "react";
/* Importing the css file for the footer component. */
import "../styles/Footer.css";

// FOOTER
/**
 * - It's a function that returns a footer with a div, a div, and an input.
 * - The input has a placeholder, an onChange handler, a value, and an onBlur handler.
 * - The onChange handler updates the inputValue state, and the onBlur handler checks
 *   if the inputValue state includes an @ symbol. If it doesn't, it alerts the user.
 * @returns A React component
 */
function Footer() {
  const [inputValue, setInputValue] = useState("");

  // ON CHANGE
  /**
   * - It takes an event object as an argument, and then calls the setInputValue function,
   *   passing in the value of the input field.
   * @param e - The event object
   */
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  // ON BLUR
  /**
   * If the input value does not include an @,
   * then alert the user that the input is not a valid email address.
   */
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

// EXPORT FOOTER
/* It's exporting the Footer component so that it can be imported in other files. */
export default Footer;

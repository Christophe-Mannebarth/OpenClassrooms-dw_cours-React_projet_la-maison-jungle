// IMPORT STYLE
/* Importing the CSS file that contains the styles for the `Banner` component. */
import "../styles/Banner.css";

// BANNER
/**
 * - It takes a single argument, which is an object with a single property, `children`,
 *   and returns a `div` element with the class `lmj-banner`
 *   and the value of the `children` property as its content.
 * - `children` is a special property that is automatically populated by React when you use JSX.
 *   It contains the content between the opening and closing tags of the component.
 * - In this case, the content is the `img` and the `h1` elements that we passed to the `Banner` component.
 * @returns A React component that renders a div with the class name "lmj-banner" and the children
 * passed to it.
 */
function Banner({ children }) {
  return <div className="lmj-banner">{children}</div>;
}

// EXPORT BANNER
/* Exporting the `Banner` component so that it can be imported by other files. */
export default Banner;

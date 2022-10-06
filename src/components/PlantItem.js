// IMPORT COMPONENT AND STYLE
/* Importing the CareScale component from the CareScale.js file. */
import CareScale from "./CareScale";
/* Importing the CSS file for the component. */
import "../styles/PlantItem.css";

// PLANT ITEM
/**
 * - It takes in 4 props: a cover, name, water, and light,
 *   and returns a list item with an image, the name, and two care scales.
 * @returns A React component.
 */
function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

// EXPORT PLANT ITEM
/* Exporting the PlantItem component so that it can be imported into other files. */
export default PlantItem;

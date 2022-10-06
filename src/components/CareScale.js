// IMPORT ICONS AND STYLE
/* Importing the svg file from the assets folder. */
import Sun from "../assets/sun.svg";
/* Importing the svg file from the assets folder. */
import Water from "../assets/water.svg";
import "../styles/PlantItem.css";

// QUANTITY LABEL
/* A constant that is an object with 3 properties. */
const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

// CARE SCALE
/**
 * - It takes in 2 props: a scaleValue and a careType,
 *   and returns a div with a number of spans equal to the scaleValue,
 *   each span containing an image of either a sun or a water drop depending on the careType.
 * @returns An array of JSX elements.
 */
function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div
      className="lmj-plant-item-carescale"
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

// EXPORT CARE SCALE
/* Exporting the CareScale component. */
export default CareScale;

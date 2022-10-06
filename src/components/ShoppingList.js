// IMPORT HOOK, DATAS, COMPONENTS AND STYLE
/* Importing the useState hook from the react library. */
import { useState } from "react";
/* Importing the plantList from the datas folder. */
import { plantList } from "../datas/plantList";
/* Importing the PlantItem component from the PlantItem.js file. */
import PlantItem from "./PlantItem";
/* Importing the Categories component from the Categories.js file. */
import Categories from "./Categories";
/* Importing the CSS file for the ShoppingList component. */
import "../styles/ShoppingList.css";

// SHOPPING LIST
/**
 * - Use the reduce method to iterate over the plantList array
 *   and return a new array of unique categories.
 * - Use the map method to iterate over the categories array
 *   and return a list item for each category.
 * - Use the map method to iterate over the plantList array
 *   and return a PlantItem component for each plant.
 * @returns An array of categories and a list of plants
 */
function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  // ADD TO CART
  /**
   * If the plant is already in the cart, increase the amount by 1, otherwise add the plant to the cart
   * with an amount of 1.
   * @param name - the name of the plant
   * @param price - number
   */
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
      //alert(`Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button
                className="lmj-plant-list-button"
                onClick={() => addToCart(name, price)}
              >
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

// EXPORT SHOPPING LIST
/* Exporting the ShoppingList component. */
export default ShoppingList;

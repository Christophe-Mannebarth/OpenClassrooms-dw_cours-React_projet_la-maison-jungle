// IMPORT STYLE
/* Importing the CSS file for the component. */
import "../styles/Categories.css";

// CATEGORIES
/**
 * It renders a select element with a list of categories, and a button to reset the active category
 * @returns A React component.
 */
function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

//EXPORT CATEGORIES
/* Exporting the Categories component. */
export default Categories;

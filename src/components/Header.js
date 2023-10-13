import { useDispatch, useSelector } from 'react-redux';
import { filterMeals, resetFilter } from '../redux/Meals/MealSlice';
import mealLogo from '../asset/meal logo.png';
import '../modules/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.meals.searchValue);
  const filteredMeals = useSelector((state) => state.meals.filteredMeals);
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch(filterMeals(searchValue));
  };

  const clearFilter = () => {
    dispatch(resetFilter());
  };
  return (
    <header>
      <div className="header-left">
        <img src={mealLogo} alt="meal logo" style={{ width: '40px' }} />
        <h1>Ayk foods</h1>
      </div>
      <form id="form-input">
        <input
          type="text"
          placeholder="find chicken soup"
          id="user-input"
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="submit" onClick={clearFilter}>Clear</button>
        {filteredMeals.length > 0 && (
        <div>
          {/* Render the filtered meals */}
          <h2>Filtered Meals:</h2>
          <ul>
            {filteredMeals.map((meal) => (
              <li key={meal.id}>{meal.title}</li>
            ))}
          </ul>
        </div>
        )}
        ;
      </form>
    </header>
  );
};

export default Header;

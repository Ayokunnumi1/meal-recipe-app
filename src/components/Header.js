import { useDispatch } from 'react-redux';
import { filterMeals } from '../redux/Meals/MealSlice';

const Header = () => {
  const dispatch = useDispatch();
  const searchMeals = (e) => {
    const searchValue = e.target.elements.searchInput.value;
    e.preventDefault();
    dispatch(filterMeals(searchValue));
  };
  return (
    <header>
      <h1>Ayk Foods</h1>
      <form onSubmit={searchMeals}>
        <input
          type="text"
          placeholder="type chicken soup"
          id=""
          name="searchInput"
        />
      </form>
    </header>
  );
};

export default Header;

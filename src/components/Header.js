import { useDispatch } from 'react-redux';
import { filterMeals } from '../redux/Meals/MealSlice';
import mealLogo from '../asset/meal logo.png';
import '../modules/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const searchMeals = (e) => {
    const searchValue = e.target.elements.searchInput.value;
    e.preventDefault();
    dispatch(filterMeals(searchValue));
  };
  return (
    <header>
      <img src={mealLogo} alt="meal logo" style={{ width: '60px', borderRadius: '50%' }} />
      <form onSubmit={searchMeals} id="form-input">
        <input
          type="text"
          placeholder="find chicken soup"
          id="user-input"
          name="searchInput"
        />
      </form>
    </header>
  );
};

export default Header;

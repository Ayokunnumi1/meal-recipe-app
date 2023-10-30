import React, { useState } from 'react'; // Import React and useState
import { useDispatch, useSelector } from 'react-redux';
import mealLogo from '../asset/meal logo.png';
import { searchDataFromServer } from '../redux/Meals/MealSlice';
import '../modules/Header.css';

const Header = () => {
  const { error } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(''); // Add state to store the search input value
  console.log(searchValue);
  const handleSearchMeals = (e) => {
    e.preventDefault();
    dispatch(searchDataFromServer(searchValue));
    setSearchValue(''); // Reset the input value
  };

  return (
    <header>
      <div className="header-left">
        <img src={mealLogo} alt="meal logo" style={{ width: '40px' }} />
        <h1>Ayk foods</h1>
      </div>
      <form id="form-input" onSubmit={handleSearchMeals}>
        {/* Use value and onChange to manage the input field */}
        <input
          type="text"
          placeholder="search meal recipe by name"
          id="user-input"
          name="searchInput"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      {error && <p style={{ color: 'white' }}>Meal Recipe Not Found</p>}
    </header>
  );
};

export default Header;

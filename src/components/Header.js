import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDataFromServer } from '../redux/Meals/MealSlice';
import mealPot from '../asset/mealPot.svg';
import searchIcon from '../asset/search.png';
import '../modules/Header.css';

const Header = () => {
  const { error } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(''); // Add state to store the search input value
  // console.log(searchValue);
  const handleSearchMeals = (e) => {
    e.preventDefault();
    dispatch(searchDataFromServer(searchValue));
    setSearchValue(''); // Reset the input value
  };

  return (
    <header>
      <div className="header-intro">
        <h1>Menu</h1>
        <img alt="meal" src={mealPot} style={{ backgroundColor: 'rgba(11, 127, 171)' }} />
      </div>
      <form id="form-input" onSubmit={handleSearchMeals}>

        <img src={searchIcon} alt="mealSearch" />
        <input
          type="text"
          placeholder="search"
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

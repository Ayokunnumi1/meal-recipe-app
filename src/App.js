import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromServer } from './redux/Meals/MealSlice';
import Meals from './components/Meals';
import MealsDetails from './components/MealDetail';
import Header from './components/Header';
import './App.css';

function App() {
  const { error } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <div className="App">
      {error && <p style={{ color: 'white' }}>Meal Recipe Not Found</p>}
      <Header />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/mealsDetails" element={<MealsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

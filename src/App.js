import { Route, Routes } from 'react-router-dom';
import Meals from './components/Meals';
import MealsDetails from './components/MealDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/mealsDetails" element={<MealsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Meals from './components/Meals';
import MealsDetails from './components/MealDetail';
// import MealsItem from './components/MealsItem';
// import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/mealsDetails" element={<MealsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MealsItem from './MealsItem';
import { getDataFromServer } from '../redux/Meals/MealSlice';

const Meals = () => {
  const { mealsData, loading, error } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <ul>
      {loading && (
        <>
          <p>Loading...</p>
          <p>Please wait...</p>
        </>
      )}
      {error && (
      <>
        <p>Error</p>
        <p>Try again later</p>
      </>
      )}
      {!loading && !error
        && mealsData.map((meal) => (
          <MealsItem
            key={meal?.id}
            id={meal?.id}
            image={meal?.image}
            title={meal?.title}
            amount={meal?.amount}
            unit={meal?.unit}
          />
        ))}
    </ul>
  );
};

export default Meals;

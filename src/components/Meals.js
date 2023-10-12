import { useSelector } from 'react-redux';
import MealsItem from './MealsItem';

const Meals = () => {
  const { mealsData, loading, error } = useSelector((state) => state.meals);

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

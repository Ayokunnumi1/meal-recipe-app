import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import arrowLeft from '../asset/arrowLeft.svg';
import { getMealsDetails } from '../redux/Details/DetailSlice';

const MealsDetails = () => {
  const { loading, error, mealsDetail } = useSelector((state) => state.mealsDetail);
  const dispatch = useDispatch();
  console.log(mealsDetail);
  const mealInfo = {
    id: mealsDetail.id,
    image: mealsDetail.images,
    title: mealsDetail.title,
    nutrients: mealsDetail.nutrient,
  };

  useEffect(() => {
    dispatch(getMealsDetails(mealInfo.id));
  }, [dispatch, mealInfo.id]);

  return (
    <div>
      <Link to="/">
        <img src={arrowLeft} alt="arrow left" />
      </Link>
      <div>
        {loading && <p>Loading!</p>}
        {error && <p>Error...</p>}
        {!loading && !error && mealsDetail
            && (
            <div key={mealInfo?.id} id={mealInfo?.id}>
              {mealInfo.image === undefined ? (<p>No image</p>)
                : (<img src={mealInfo.image} alt="meals" />)}
              <p>{mealInfo?.title}</p>
              {mealInfo.nutrients.map((nutrient) => (
                <>
                  <p>{nutrient?.name}</p>
                  <p>{nutrient?.amount}</p>
                  <p>{nutrient?.unit}</p>
                  <p>{nutrient?.percentOfDailyNeeds}</p>
                </>
              ))}
            </div>
            )}
      </div>
    </div>

  );
};

export default MealsDetails;

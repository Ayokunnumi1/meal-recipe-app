import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import arrowImage from '../asset/arrowImg.svg';
import { getMealsDetails } from '../redux/Details/DetailSlice';

const MealsItem = ({
  id,
  image, title, amount, unit,
}) => {
  const dispatch = useDispatch();
  const getButtonId = (buttonId) => {
    dispatch(getMealsDetails(buttonId));
  };
  return (
    <div>
      <img src={image} alt="meal" />
      <h2>{title}</h2>
      <p>{amount}</p>
      <p>{unit}</p>
      <Link to="/mealsDetails">
        <button onClick={() => getButtonId(id)} type="submit">
          <img src={arrowImage} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

MealsItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default MealsItem;

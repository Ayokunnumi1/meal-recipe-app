/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrowImage from '../asset/arrowImg.svg';

const MealsItem = ({
  image, title, amount, unit,
}) => {
  return (
    <div>
      <img src={image} alt="meal" />
      <h2>{title}</h2>
      <p>{amount}</p>
      <p>{unit}</p>
      <Link to="/mealsDetails">
        <button type="submit">
          <img src={arrowImage} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

MealsItem.propTypes = {
  // id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default MealsItem;

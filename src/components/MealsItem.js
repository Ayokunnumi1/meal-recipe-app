/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
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
      <button type="submit">
        <img src={arrowImage} alt="arrow" />
      </button>
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

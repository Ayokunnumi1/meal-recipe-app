import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import arrowImage from '../asset/arrowImg.svg';
import { getMealsDetails } from '../redux/Details/DetailSlice';
import '../modules/MealsItem.css';

const MealsItem = ({
  id,
  image, title, amount, unit,
}) => {
  const dispatch = useDispatch();
  const getButtonId = (buttonId) => {
    dispatch(getMealsDetails(buttonId));
  };
  return (
    <section className="">
      <button onClick={() => getButtonId(id)} type="submit" className="meals-content">
        <div className="">
          <Link to="/mealsDetails">
            <div>
              <img src={image} alt="meal" className="meal-img" />
              <div className="meal-text-container">
                <h2>{title}</h2>
                <p className="meal-amt">{amount}</p>
                <p className="meal-unit">{unit}</p>
              </div>
              <div className="arrow-img">
                <img src={arrowImage} alt="arrow" />
              </div>
            </div>
          </Link>
        </div>
      </button>
    </section>
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

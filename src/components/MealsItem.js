import PropTypes from 'prop-types';

const MealsItem = ({
  image, title, amount, unit,
}) => (
  <div>
    <img src={image} alt="meal" />
    <h2>{title}</h2>
    <p>{amount}</p>
    <p>{unit}</p>
    {/* <button onClick={() => }></button> */}
  </div>
);

MealsItem.propTypes = {
  // id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default MealsItem;

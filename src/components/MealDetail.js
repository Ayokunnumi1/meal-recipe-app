import { Link } from 'react-router-dom';
import arrowLeft from '../asset/arrowLeft.svg';

const MealsDetails = () => (
  <>
    <Link to="/">
      <img src={arrowLeft} alt="arrow left" />
      Navigate to Meals Home page
    </Link>
    <p>MealsDetails</p>

  </>
);

export default MealsDetails;

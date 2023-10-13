import mealLogo from '../asset/meal logo.png';
import '../modules/Header.css';

const Header = () => (
  <header>
    <div className="header-left">
      <img src={mealLogo} alt="meal logo" style={{ width: '40px' }} />
      <h1>Ayk foods</h1>
    </div>
    <p className="nutrient-header">Nutrient Diary</p>
  </header>
);

export default Header;

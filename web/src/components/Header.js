import '../styles/components/Header.scss';
import logo from '../images/boolean_logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Logo imagenes"
        title="Logo imagenes"
      />
    </header>
  );
};

export default Header;

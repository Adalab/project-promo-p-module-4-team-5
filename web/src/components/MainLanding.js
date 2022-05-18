import '../styles/components/MainLanding.scss';

import { Link } from 'react-router-dom';

function MainLanding() {
  return (
    <div className="main">
      <article>
        <img
          className="main__img"
          src="./assets/images/boolean logo.png"
          alt=""
        />
      </article>
      <article className="hero">
        <h1 className="hero__title">Crea tu tarjeta de visita</h1>
        <p className="hero__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </article>
      <article>
        <nav className="nav">
          <ul className="nav__container">
            <li className="nav__list">
              <a className="nav__link" href="./card.html">
                <i className="fa-solid fa-object-ungroup"></i>
              </a>
              <h2 className="nav__title">Diseña</h2>
            </li>
            <li className="nav__list">
              <a className="nav__link" href="./card.html">
                <i className="fa-solid fa-keyboard"></i>
              </a>
              <h2 className="nav__title">Rellena</h2>
            </li>
            <li className="nav__list">
              <a className="nav__link" href="./card.html">
                <i className="list-desing__icon fas fa-share-alt"></i>
              </a>
              <h2 className="nav__title">Comparte</h2>
            </li>
          </ul>
        </nav>
      </article>
      {/* <a className="main__button" href="./card.html"> */}
      <Link to="/Create" className="main__button">
        Comenzar
      </Link>
      {/* </a> */}
    </div>
  );
}

export default MainLanding;

import Profile from './Profile.js';
import '../styles/components/CardPreview.scss';

function CardPreview(props) {
  const handleResetBtn = () => {
    props.handleReset();
  };
  return (
    <section className="preview-section">
      <div className="preview-box">
        <section className="preview-box__container ">
          <i className="fa-solid fa-trash-can preview-box__container--img"></i>
          <button
            className="preview-box__container--button"
            onClick={handleResetBtn}
          >
            reset
          </button>
        </section>

        <section className="preview-box__containerphoto">
          <section
            className={`containercard palette${props.dataCard.palette} `}
          >
            <article className="containercard__box">
              <div className="rectangle outline"></div>
              <div className="container-tex">
                <h2 className="container-tex__title  name">
                  {props.dataCard.name || 'Nombre Apellidos'}
                </h2>
                <p className="container-tex__paragraph ">
                  {props.dataCard.job || 'Front-end developer'}
                </p>
              </div>
            </article>
            {/* <div className="preview-box__containerphoto--img "></div> */}
            <Profile avatar={props.dataCard.photo} />
            <ul className="preview-list">
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  href={`tel:${props.dataCard.phone}`}
                >
                  <i className="fa-solid fa-mobile-screen-button link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  href={`mailto:${props.dataCard.email}`}
                >
                  <i className="fa-regular fa-envelope link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  target="blank"
                  href={`${props.dataCard.linkedin}`}
                >
                  <i className="fa-brands fa-linkedin-in link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  target="blank"
                  href={`${props.dataCard.github}`}
                >
                  <i className="fa-brands fa-github-alt link"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}

export default CardPreview;

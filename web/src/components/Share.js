import '../styles/components/Share.scss';

function Share(props) {
  const handleClickCreateCardChild = (ev) => {
    ev.preventDefault();
    props.handleClickCreateCardParent();
  };
  const handleClickCollapsable = (ev) => {
    const collapsableClicked = ev.currentTarget.id;
    console.log(collapsableClicked);
    props.handleToggleForms(collapsableClicked);
  };
  return (
    <>
      <fieldset
        className={`fieldset ${props.shareOpen}  share__fieldset`}
        id="share"
        onClick={handleClickCollapsable}
      >
        <div className="share__title1 ">
          <a href="http://">
            <i className="fa-solid fa-share-nodes share__share"></i>
          </a>
          <p className="share__legend" id="share">
            Comparte
          </p>
          <i className="fieldset__arrow fa-solid fa-chevron-down share__arrow"></i>
        </div>

        <div className="fieldset__container share__containerposition">
          <div className="share__container ">
            <i className="fa-solid fa-address-card fa-lg container__icon"></i>
            <button
              className="container__button"
              onClick={handleClickCreateCardChild}
            >
              Crear tarjeta
            </button>
          </div>
          <article className="share__article  ">
            <h2 className="share__title ">La tarjeta ha sido creada:</h2>
            <a
              className=" share__link"
              href={props.apiData.cardURL}
              target="blank"
            >
              {props.apiData.cardURL}
            </a>

            <button className="share__twitter" disabled>
              <i className="fa-brands fa-twitter"></i>
              <a
                className="share__twitter"
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20¡Conóceme!%20&url=${props.apiData.cardURL}`}
              >
                Compartir en twitter
              </a>
            </button>
          </article>
        </div>
      </fieldset>
    </>
  );
}
export default Share;

import '../styles/components/Design.scss';

//Aqui tengo que escuchar los inputs de las paletas de colores. Me creo una funcion para escucharlo.
// dentro de esta función llamo a la función que me mando la abuela - la madre - para guarda la información y que estas tambien la reciban.
function Design(props) {
  const handleInputChild = (ev) => {
    //Aqui ejecuto la funcion pasada por props de la abuela
    //Le paso un objeto ({}) que contiene el name del input para saber sobre cual estoy cambiando y el valor del input
    props.handleInputParent({
      value: ev.target.value,
      name: ev.target.name,
    });
  };

  const handleClickCollapsable = (ev) => {
    const collapsableClicked = ev.currentTarget.id;
    console.log(collapsableClicked);
    props.handleToggleForms(collapsableClicked);
  };
  return (
    <>
      <fieldset
        className={`fieldset fieldset-colours ${props.designOpen}`}
        id="design"
        onClick={handleClickCollapsable}
      >
        <section className="design">
          <div className="design__box">
            <a href="http://">
              <i className="fa-solid fa-object-ungroup window design__box--window"></i>
            </a>

            <legend className="design__box--title">Diseña</legend>
          </div>

          <i className="fieldset__arrow fa-solid fa-chevron-down design__box--arrow"></i>
        </section>

        <section className="fieldset__container colour-section">
          <h3 className="colours-title">colores</h3>

          <section className="palette-section">
            <div className="form-inputs input__label">
              <input
                name="palette"
                id="palette-1"
                type="radio"
                className="inputs "
                value="1"
                checked={props.dataCard.palette === '1'}
                //Aqui no va props. porque escucho a la funcion creada en este mismo componente
                onChange={handleInputChild}
              />
              <label htmlFor="colors"></label>
              <input
                name="palette"
                id="palette-2"
                type="radio"
                className="inputs "
                value="2"
                checked={props.dataCard.palette === '2'}
                onChange={handleInputChild}
              />
              <label htmlFor="colors"></label>

              <input
                name="palette"
                id="palette-3"
                type="radio"
                className="inputs "
                value="3"
                checked={props.dataCard.palette === '3'}
                onChange={handleInputChild}
              />
              <label htmlFor="colors"></label>
            </div>

            <section className="colours-list">
              <ul className="list-1">
                <li className="colour-1a "></li>
                <li className="colour-1b "></li>
                <li className="colour-1c "></li>
              </ul>

              <ul className="list-3">
                <li className="colour-2a "></li>
                <li className="colour-2b "></li>
                <li className="colour-2c "></li>
              </ul>

              <ul className="list-3">
                <li className="colour-3a "></li>
                <li className="colour-3b "></li>
                <li className="colour-3c"></li>
              </ul>
            </section>
          </section>
        </section>
      </fieldset>
    </>
  );
}

export default Design;

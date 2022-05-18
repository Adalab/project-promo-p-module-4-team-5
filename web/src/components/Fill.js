import GetAvatar from './GetAvatar';
import '../styles/components/Fill.scss';

function Fill(props) {
  //Aqui tengo que escuchar los inputs de las del formulario. Me creo una funcion para escucharlo.
  // dentro de esta función llamo a la función que me mando la abuela - la madre - para guarda la información y que estas tambien la reciban.
  const handleInputFillChild = (ev) => {
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
        className={`fieldset ${props.fillOpen}  fill__fieldset`}
        id="fill"
        onClick={handleClickCollapsable}
      >
        <div className="fill__title ">
          <i className="fa-solid fa-keyboard fill__keyboard"></i>
          <p className="fill__legend" id="fill">
            Rellena
          </p>
          <i className="fieldset__arrow fa-solid fa-chevron-down fill__arrow"></i>
        </div>

        <div className="fieldset__container fill__container">
          <label className="form__label" htmlFor="name">
            Nombre completo
          </label>
          <input
            className="form__field "
            type="text"
            id="name"
            name="name"
            maxLength="20"
            placeholder="Ej: Sally Jill"
            onChange={handleInputFillChild}
            value={props.dataCard.name}
          />
          <label className="form__label" htmlFor="job">
            Puesto
          </label>
          <input
            className="form__field"
            type="text"
            id="job"
            name="job"
            maxLength="24"
            placeholder="Ej: Front-end unicorn"
            onChange={handleInputFillChild}
            value={props.dataCard.job}
          />

          <label className="form__label form__img" htmlFor="img">
            {' '}
            Imagen de perfil{' '}
          </label>

          <GetAvatar
            avatar={props.dataCard.photo}
            updateAvatar={props.updateAvatar}
          />

          <label className="form__label " htmlFor="email" required>
            Email
          </label>
          <input
            className="form__field"
            type="email"
            id="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
            onChange={handleInputFillChild}
            value={props.dataCard.email}
          />
          <label className="form__label" htmlFor="telephone" required>
            Teléfono
          </label>
          <input
            className="form__field"
            type="“tel”"
            id="phone"
            name="phone"
            placeholder="Ej: 55-555-55"
            onChange={handleInputFillChild}
            value={props.dataCard.phone}
          />
          <label className="form__label" htmlFor="text">
            Linkedin
          </label>
          <input
            className="form__field"
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="Ej: linkedin.con/in/sally.hill"
            onChange={handleInputFillChild}
            value={props.dataCard.linkedin}
          />
          <label className="form__label" htmlFor="text">
            Github
          </label>
          <input
            className="form__field"
            type="text"
            id="github"
            name="github"
            placeholder="Ej: @sally-hill"
            onChange={handleInputFillChild}
            value={props.dataCard.github}
          />
        </div>
      </fieldset>
    </>
  );
}
export default Fill;

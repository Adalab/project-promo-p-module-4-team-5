import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Header from './Header';
import Footer from './Footer';

import '../styles/components/Create.scss';
import '../styles/components/Fieldsets.scss';

function Create(props) {
  return (
    <>
      <Header />

      <section className="box-preview">
        {/*CARD PREVIEW :Solo le tengo que pasar los datos de mis constante de estado donde tengo mi objeto con los datos que son variables*/}
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
          avatar={props.avatar}
        />

        <section className="section-form">
          <form action="" className="">
            {/*DESIGN : le paso los datos de mis constante de estado donde tengo mi objeto con los datos que son variables y la función de HANDLE INPUT PARENT para que DESIGN pueda ejecutarla y reenviar esos datos*/}
            <Design
              dataCard={props.dataCard}
              handleInputParent={props.handleInputParent}
              designOpen={props.designOpen}
              handleToggleForms={props.handleToggleForms}
            />
            {/*FILL : le paso los datos de mis constante de estado donde tengo mi objeto con los datos que son variables y la función de HANDLE INPUT PARENT para que FILL pueda ejecutarla y reenviar esos datos*/}
            <Fill
              dataCard={props.dataCard}
              handleInputParent={props.handleInputParent}
              fillOpen={props.fillOpen}
              handleToggleForms={props.handleToggleForms}
              updateAvatar={props.updateAvatar}
              avatar={props.avatar}
            />

            {/*SHARE : le paso los datos de mis constante de estado donde tengo mi objeto con los datos que son variables y que necesitaré para rellenar y compartir y la función de HANDLE CLICK CREATE CARD PARENT para que SHARE pueda ejecutarla y una vez haga Click llame a la API para que le devuelva la URL*/}
            <Share
              dataCard={props.dataCard}
              handleClickCreateCardParent={props.handleClickCreateCardParent}
              apiData={props.apiData}
              shareOpen={props.shareOpen}
              handleToggleForms={props.handleToggleForms}
            />
          </form>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Create;

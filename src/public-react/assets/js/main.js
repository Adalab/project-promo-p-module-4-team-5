'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);

'use strict';

//DESIGN DROP-DOWN
//Constants

function getElement(className) {
  return document.querySelector(className);
}
const shareBtn = getElement('.js-share-container');
const shareMsg = getElement('.js-share-article');
const designBox = getElement('.js-designBox');
const colourDropDown = getElement('.js-colour');
const designArrow = getElement('.js-designArrow');
const inputCircle1 = getElement('.js-inputColor1');
const inputCircle2 = getElement('.js-inputColor2');
const inputCircle3 = getElement('.js-inputColor3');
const cardProfile = getElement('.js-palette');
// Constante formulario
const nameForm = getElement('.js__fillIn__name');
// const nameForm = querySelector('.js__fillIn__name');
const form = getElement('.js_form');
const jobForm = getElement('.js__fillIn__job');
const nameProfile = getElement('.js__card__name');
const jobProfile = getElement('.js__card__job');
const emailProfile = getElement('.js_email');
const phoneProfile = getElement('.js_phone');
const linkedinProfile = getElement('.js_linkedin');
const githubProfile = getElement('.js_github');
const resetButton = getElement('.js__reset');
const formFieldsets = document.querySelectorAll('.js-form-fieldset');
const shareTwitterBtn = document.querySelector('.js_twitterShareBtn');
const URLCard = getElement('.js_URL');
const feedback = getElement('.js_message_error');
let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: 1,
  photo: '',
};
function modifyCardClasses(classAdd, classremove1, classremove2) {
  cardProfile.classList.add(classAdd);
  cardProfile.classList.remove(classremove1);
  cardProfile.classList.remove(classremove2);
}

console.log('>> Ready :)');

function collapseFieldsetsExceptCurrent(event) {
  formFieldsets.forEach((fieldset) => {
    if (fieldset !== event.currentTarget.parentElement) {
      fieldset.classList.add('collapsed');
    }
  });
  if (shareBtn.classList.contains('white')) {
    shareBtn.classList.remove('white');
    feedback.innerHTML = '';
  }
}

for (const fieldset of formFieldsets) {
  const title = fieldset.querySelector('.js-form-title');

  title.addEventListener('click', (event) => {
    // Escondemos todos los fieldset menos el pulsado
    collapseFieldsetsExceptCurrent(event);

    // Mostramos/Escondemos el fieldset pulsado
    fieldset.classList.toggle('collapsed');
  });
}

inputCircle1.addEventListener('click', () => {
  modifyCardClasses('palette3', 'palette2', 'palette1');
  data.palette = 1;
});
inputCircle2.addEventListener('click', () => {
  modifyCardClasses('palette2', 'palette3', 'palette1');
  data.palette = 2;
});
inputCircle3.addEventListener('click', () => {
  modifyCardClasses('palette1', 'palette3', 'palette2');
  data.palette = 3;
});

function handleKeyup(event) {
  const inputElement = event.target;
  if (inputElement.name === 'name') {
    data.name = inputElement.value;
    nameProfile.innerHTML = data.name;
    if (inputElement.value === '') {
      nameProfile.innerHTML = 'Escribe tu nombre';
    }
  } else if (inputElement.name === 'job') {
    jobProfile.innerHTML = data.job;
    data.job = inputElement.value;
    if (inputElement.value === '') {
      jobProfile.innerHTML = 'Escribe tu profesion';
    }
  } else if (inputElement.name === 'email') {
    data.email = inputElement.value;
  } else if (inputElement.name === 'phone') {
    data.phone = inputElement.value;
  } else if (inputElement.name === 'linkedin') {
    data.linkedin = inputElement.value;
  } else if (inputElement.name === 'github') {
    data.github = inputElement.value;
  }

  renderPreview();
}
resetButton.addEventListener('click', handleReset);
function handleReset() {
  console.log('click');
  const profileImage = document.querySelector('.js__profile-image');
  const profilePreview = document.querySelector('.js__profile-preview');
  form.reset();

  nameProfile.innerHTML = 'Nombre profile';
  jobProfile.innerHTML = 'Front-end developer';
  emailProfile.href = '';
  linkedinProfile.href = '';
  githubProfile.href = '';
  modifyCardClasses('palette3', 'palette2', 'palette1');
  // const srcImage = 'url(./assets/images/imagen-chica.png)';
  profilePreview.style.backgroundImage = '';
  profileImage.style.backgroundImage = 'url(./assets/images/imagen-chica.png)';
  data = {
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    palette: 3,
    photo: '',
  };
  return data;
}

function renderPreview() {
  emailProfile.href = `mailto:${data.email}`;
  linkedinProfile.href = `${data.linkedin}`;
  githubProfile.href = `${data.github}`;
  phoneProfile.href = `${data.phone}`;
}
form.addEventListener('keyup', handleKeyup);

shareBtn.addEventListener('click', (event) => {
  event.preventDefault();
  shareBtn.classList.add('white');
  shareMsg.classList.remove('hidden');
});

//  hacer fetch con POST y enviar el objeto (comprobar que sea igual)
// coger el resultado que nos da la api
// modificiarlo por el enlace de compartir
// https://awesome-profile-cards.herokuapp.com/card/

function createCard(event) {
  event.preventDefault();
  console.log(data);
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.photo !== '' &&
    data.palette !== '' &&
    data.email !== ''
  ) {
    feedback.innerHTML = '';
    shareBtn.classList.remove('white');

    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST', // enviar datos a la API
      headers: { 'Content-Type': 'application/json' }, //tipo de dato
      body: JSON.stringify(data), //datos que de quiero enviar, en este caso es data, pasandolo a string
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          feedback.innerHTML = 'Genial, la tarjeta ha sido creada!';
          shareBtn.classList.add('white');
          URLCard.innerHTML = result.cardURL;
          URLCard.href = result.cardURL;
          localStorage.setItem('data', JSON.stringify(data));
        }
      });
    shareTwitterBtn.removeAttribute('disabled');
  } else {
    feedback.innerHTML = 'Falta algún dato en el formulario';
  }
}

function shareOnTwitter(event) {
  event.preventDefault();
  console.log(URLCard.href);
  let url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20Conóceme!%20&url=${URLCard.href}`;
  window.location.href = url;
}

shareBtn.addEventListener('click', createCard);
shareTwitterBtn.addEventListener('click', shareOnTwitter);

function initApp() {
  // cache crudo
  const cacheRaw = localStorage.getItem('data');
  // si el cache no es nulo pintame lo que hay en data
  if (cacheRaw !== null) {
    const cache = JSON.parse(cacheRaw);
    data = cache;
    nameProfile.innerHTML = data.name;
    jobProfile.innerHTML = data.job;
    emailProfile.href = `mailto:${data.email}`;
    phoneProfile.href = `tel:${data.phone}`;
    linkedinProfile.href = data.linkedin;
    githubProfile.href = data.github;
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
}
initApp();

//# sourceMappingURL=main.js.map

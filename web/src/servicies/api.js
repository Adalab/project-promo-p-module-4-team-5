const URL_SERVER = 'https://awesome-profile-cards.herokuapp.com/card';
// const URL_LOCAL = 'http://localhost:4000/card';

const dataApi = (data) => {
  return fetch(URL_SERVER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi;
    });
};

export default dataApi;

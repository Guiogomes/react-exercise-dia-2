const getStatesInfo = () => {
  return new Promise((resolve, reject) => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => response.json())
    .then((object) => {
      resolve(object.map(({ nome }) => nome))
    });
  })
}


export default getStatesInfo;
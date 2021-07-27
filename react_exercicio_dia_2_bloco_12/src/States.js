const getStatesInfo = async () => {
  const getApiInfo = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  const statesInfo = await getApiInfo.json();
  const stateName = await statesInfo.map ((state) => state.nome)
  return stateName
}

export default getStatesInfo().then(result => result)


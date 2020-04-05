const getAllCountries = () => {
  const response = fetch("https://restcountries.eu/rest/v2/all").then(res =>
    res.json()
  );
  return response;
};
const getCountryDetail = name => {
  const response = fetch(
    `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
  ).then(res => res.json());
  return response;
};
const getCountriesByRegion = name => {
  const response = fetch(
    `https://restcountries.eu/rest/v2/region/${name}`
  ).then(res => res.json());
  return response;
};
const getCountryName = code => {
  const response = fetch(
    `https://restcountries.eu/rest/v2/alpha/${code}`
  ).then(res => res.json());
  return response;
};

export {
  getAllCountries,
  getCountryDetail,
  getCountryName,
  getCountriesByRegion
};

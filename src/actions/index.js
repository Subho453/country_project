const getCountries = page => ({
  type: "GET_COUNTRIES_REQUEST",
  payload: page
});

const setCountriesData = data => ({
  type: "GET_COUNTRIES_SUCCESS",
  payload: data
});

const setCountriesError = error => ({
  type: "GET_COUNTRIES_FAILURE",
  payload: { error }
});

const getCountryDetail = name => ({
  type: "GET_COUNTRY_DETAIL_REQUEST",
  payload: { name }
});

const setCountryDetailData = data => ({
  type: "GET_COUNTRY_DETAIL_SUCCESS",
  payload: { data }
});

const setCountryDetailError = error => ({
  type: "GET_COUNTRY_DETAIL_FAILURE",
  payload: { error }
});
const getCountriesByRange = data => ({
  type: "GET_COUNTRIES_BY_REGION_REQUEST",
  payload: data
});

const setCountriesByRangeData = data => ({
  type: "GET_COUNTRIES_BY_REGION_SUCCESS",
  payload: data
});

const setCountriesByRangeError = error => ({
  type: "GET_COUNTRIES_BY_REGION_FAILURE",
  payload: { error }
});

const getCountryName = code => ({
  type: "GET_COUNTRY_NAME_REQUEST",
  payload: { code }
});

const setCountryNameData = data => ({
  type: "GET_COUNTRY_NAME_SUCCESS",
  payload: { data }
});

const setCountryNameError = error => ({
  type: "GET_COUNTRY_NAME_FAILURE",
  payload: { error }
});
const goBack = () => ({
  type: "GO_BACK"
});
const getSearchedData = data => ({
  type: "GET_SEARCHED_DATA",
  payload: data
});
export {
  getCountries,
  setCountriesData,
  setCountriesError,
  getCountryDetail,
  setCountryDetailData,
  setCountryDetailError,
  getCountriesByRange,
  setCountriesByRangeData,
  setCountriesByRangeError,
  getCountryName,
  setCountryNameData,
  setCountryNameError,
  goBack,
  getSearchedData
};

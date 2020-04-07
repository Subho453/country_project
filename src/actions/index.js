const getCountries = () => ({
  type: "GET_COUNTRIES_REQUEST",
});

const setCountriesData = (data) => ({
  type: "GET_COUNTRIES_SUCCESS",
  payload: data,
});

const setCountriesError = (error) => ({
  type: "GET_COUNTRIES_FAILURE",
  payload: { error },
});

const getCountryDetail = (name) => ({
  type: "GET_COUNTRY_DETAIL_REQUEST",
  payload: { name },
});

const setCountryDetailData = (data) => ({
  type: "GET_COUNTRY_DETAIL_SUCCESS",
  payload: { data },
});

const setCountryDetailError = (error) => ({
  type: "GET_COUNTRY_DETAIL_FAILURE",
  payload: { error },
});
const getCountriesByRange = (data) => ({
  type: "GET_COUNTRIES_BY_REGION_REQUEST",
  payload: data,
});

const setCountriesByRangeData = (data) => ({
  type: "GET_COUNTRIES_BY_REGION_SUCCESS",
  payload: data,
});

const setCountriesByRangeError = (error) => ({
  type: "GET_COUNTRIES_BY_REGION_FAILURE",
  payload: { error },
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
};

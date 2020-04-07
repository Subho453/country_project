const initialState = {
  countries: [],
  countryDetail: {},
};

const dataReducers = (state = initialState, action) => {
  if (action.type === "GET_COUNTRIES_SUCCESS") {
    state.countries = action.payload.data;
    return { ...state };
  }
  if (action.type === "GET_COUNTRIES_BY_REGION_SUCCESS") {
    state.countries = action.payload.data;
    return { ...state };
  }
  if (action.type === "GET_COUNTRY_DETAIL_SUCCESS") {
    state.countryDetail = action.payload.data[0];
    return { ...state };
  }
  return state;
};

export default dataReducers;

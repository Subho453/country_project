const initialState = {
  countries: [],
  countryDetail: {},
  total: null,
  borders: []
};

const dataReducers = (state = initialState, action) => {
  if (action.type === "GET_COUNTRIES_SUCCESS") {
    state.countries = action.payload.data.splice(action.payload.page * 8, 8);
    state.total = Math.ceil(action.payload.data.length / 8);
    return { ...state };
  }
  if (action.type === "GET_COUNTRIES_BY_REGION_SUCCESS") {
    state.countries = action.payload.data.splice(action.payload.page * 8, 8);
    state.total = Math.ceil(action.payload.data.length / 8);
    return { ...state };
  }
  if (action.type === "GET_COUNTRY_DETAIL_SUCCESS") {
    state.countryDetail = action.payload.data[0];
    return { ...state };
  }
  if (action.type === "GO_BACK") {
    state.countryDetail = {};
    state.borders = [];
    return { ...state };
  }
  if (action.type === "GET_COUNTRY_NAME_SUCCESS") {
    state.borders.push(action.payload.data.name);
    return { ...state };
  }
  return state;
};

export default dataReducers;

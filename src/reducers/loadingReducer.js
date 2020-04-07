const loadingReducer = (state = false, action) => {
  if (
    action.type === "GET_COUNTRIES_REQUEST" ||
    action.type === "GET_COUNTRY_DETAIL_REQUEST" ||
    action.type === "GET_COUNTRIES_BY_REGION_REQUEST"
  ) {
    return true;
  } else {
    return false;
  }
};

export default loadingReducer;

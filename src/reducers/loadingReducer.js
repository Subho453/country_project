const loadingReducer = (state = false, action) => {
  if (action.type === "GET_COUNTRIES_REQUEST") {
    return true;
  } else {
    return false;
  }
};

export default loadingReducer;

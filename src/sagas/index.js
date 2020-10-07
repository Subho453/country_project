import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAllCountries,
  getCountryDetail,
  getCountriesByRegion,
} from "../api";
import {
  setCountriesData,
  setCountriesError,
  setCountryDetailData,
  setCountryDetailError,
  setCountriesByRangeData,
  setCountriesByRangeError,
} from "../actions";

function* handleCountries() {
  try {
    const res = yield call(getAllCountries);
    yield put(setCountriesData({ data: res }));
  } catch (error) {
    yield put(setCountriesError(error));
  }
}
function* handleCountryDetail(action) {
  try {
    const res = yield call(getCountryDetail, action.payload.name);
    yield put(setCountryDetailData(res));
  } catch (error) {
    yield put(setCountryDetailError(error));
  }
}
function* handleCountriesByRegion(action) {
  try {
    const res = yield call(getCountriesByRegion, action.payload.name);
    yield put(setCountriesByRangeData({ data: res }));
  } catch (error) {
    yield put(setCountriesByRangeError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery("GET_COUNTRIES_REQUEST", handleCountries);
  yield takeEvery("GET_COUNTRY_DETAIL_REQUEST", handleCountryDetail);
  yield takeEvery("GET_COUNTRIES_BY_REGION_REQUEST", handleCountriesByRegion);
}

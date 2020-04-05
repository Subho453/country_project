import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAllCountries,
  getCountryDetail,
  getCountryName,
  getCountriesByRegion
} from "../api";
import {
  setCountriesData,
  setCountriesError,
  setCountryDetailData,
  setCountryDetailError,
  setCountryNameData,
  setCountryNameError,
  setCountriesByRangeData,
  setCountriesByRangeError
} from "../actions";

function* handleCountries(action) {
  try {
    const res = yield call(getAllCountries);
    yield put(setCountriesData({ data: res, page: action.payload.page }));
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
    yield put(
      setCountriesByRangeData({ data: res, page: action.payload.page })
    );
  } catch (error) {
    yield put(setCountriesByRangeError(error));
  }
}
function* handleCountryName(action) {
  try {
    const res = yield call(getCountryName, action.payload.code);
    yield put(setCountryNameData(res));
  } catch (error) {
    yield put(setCountryNameError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery("GET_COUNTRIES_REQUEST", handleCountries);
  yield takeEvery("GET_COUNTRY_DETAIL_REQUEST", handleCountryDetail);
  yield takeEvery("GET_COUNTRY_NAME_REQUEST", handleCountryName);
  yield takeEvery("GET_COUNTRIES_BY_REGION_REQUEST", handleCountriesByRegion);
}

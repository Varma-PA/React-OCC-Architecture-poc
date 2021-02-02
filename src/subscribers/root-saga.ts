import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as endpoints from "../endpoints";

function getApi() {
  return fetch(endpoints.GET_PRODUCTS_ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchingTheApi() {
  const products = yield call(getApi);
  yield put({ type: types.GET_PRODUCTS_ASYNC, payload: products });
}

function* fetching() {
  yield takeLatest(types.GET_PRODUCTS, fetchingTheApi);
}

export { fetching };

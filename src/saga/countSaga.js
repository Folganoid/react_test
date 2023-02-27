import {put, takeEvery} from "redux-saga/effects";
import { addCashAction, getCashAction, ASYNC_ADD_CASH, ASYNC_GET_CASH } from "../store/cashReducer";

const delay = (ms) => new Promise (res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000);
    yield put(addCashAction(10));
}

function* decrementWorker() {
    yield delay(1000);
    yield put(getCashAction(10));
}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker);
    yield takeEvery(ASYNC_GET_CASH, decrementWorker);
}
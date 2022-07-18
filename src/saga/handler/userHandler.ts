import * as types from "../../redux/type";
import {
  takeEvery,
  put,
  call,
  takeLatest,
  take,
  delay,
} from "redux-saga/effects";
import {
  userSuccess,
  userError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
} from "../../redux/action";
import { loadUserApi } from "../request/api";
import { AddUserApi, DeleteUserApi, UpdateUserApi } from "../request/api";

type userResType = [];
export function* userSaga() {
  try {
    const response: userResType = yield call(loadUserApi);
    yield put(userSuccess(response));
  } catch (error) {
    yield put(userError(error));
  }
}

export function* addUserSaga({ payload }: any) {
  try {
    const response: userResType = yield call(AddUserApi, payload);
    yield put(createUserSuccess());
  } catch (error) {
    yield put(createUserError(error));
  }
}

export function* deleteUserSaga(id: number) {
  try {
    const response: userResType | number = yield call(DeleteUserApi, id);

    //if (response.status === 200) {
    // yield delay(200);
    yield put(deleteUserSuccess(id));
    // }
  } catch (error) {
    console.log("e", error);
    yield put(deleteUserError(error));
  }
}

export function* updateUserSaga({ payload }: any) {
  try {
    yield call(UpdateUserApi, payload.id, payload);
    yield put(updateUserSuccess());
  } catch (error) {
    yield put(updateUserError(error));
  }
}

export function* onLoadUser() {
  yield takeEvery(types.Loading, userSaga);
}

export function* addUser() {
  yield takeLatest(types.CreateUserStart, addUserSaga);
}

export function* deleteUser() {
  while (true) {
    const { payload: id } = yield take(types.DeleteUserStart);
    yield call(deleteUserSaga, id);
  }
}

export function* updateUser() {
  yield takeLatest(types.UpdateUserStart, updateUserSaga);
}

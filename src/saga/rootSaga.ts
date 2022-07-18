import { all, fork } from "redux-saga/effects";
import {
  onLoadUser,
  addUser,
  deleteUser,
  updateUser,
} from "./handler/userHandler";

// fork is used to run the function parallel
const Sagas = [
  fork(onLoadUser),
  fork(addUser),
  fork(deleteUser),
  fork(updateUser),
];

export function* rootSaga() {
  yield all([...Sagas]);
}

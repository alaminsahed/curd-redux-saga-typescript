import * as types from "./type";

type userType = {
  id: number;
  name: string;
  email: string;
};

//type viewUserType = []

export const loadingStart = () => {
  return {
    type: types.Loading,
  };
};

export const userSuccess = (user: []) => {
  return {
    type: types.Success,
    payload: user,
  };
};

export const userError = (error: any) => {
  return {
    type: types.Error,
    payload: error,
  };
};

export const createUserStart = (user: any) => {
  return {
    type: types.CreateUserStart,
    payload: user,
  };
};

export const createUserSuccess = () => {
  return {
    type: types.CreateUserSuccess,
  };
};

export const createUserError = (error: any) => {
  return {
    type: types.CreateUserError,
    payload: error,
  };
};

export const deleteUserStart = (id: number) => {
  return {
    type: types.DeleteUserStart,
    payload: id,
  };
};

export const deleteUserSuccess = (id: number) => {
  return {
    type: types.DeleteUserSuccess,
    payload: id,
  };
};

export const deleteUserError = (error: any) => {
  return {
    type: types.DeleteUserError,
    payload: error,
  };
};

export const updateUserStart = (info: any) => {
  return {
    type: types.UpdateUserStart,
    payload: info,
  };
};

export const updateUserSuccess = () => {
  return {
    type: types.UpdateUserSuccess,
  };
};

export const updateUserError = (error: any) => {
  return {
    type: types.UpdateUserError,
    payload: error,
  };
};

export const searchUserStart = (query: string) => {
  return {
    type: types.SearchUserStart,
    payload: query,
  };
};

export const searchUserSuccess = (user: userType) => {
  return {
    type: types.SearchUserSuccess,
    payload: user,
  };
};

export const searchUserError = (error: any) => {
  return {
    type: types.SearchUserError,
    payload: error,
  };
};

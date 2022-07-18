import * as types from "./type";

type IState = {
  users: Array<any>;
  loading: boolean;
  error: string | null;
};

type IAction = {
  type: string;
  payload?: any;
};

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case types.Loading:
    case types.CreateUserStart:
    case types.DeleteUserStart:
    case types.UpdateUserStart:
    case types.SearchUserStart:
      return {
        ...state,
        loading: true,
      };
    case types.Success:
    case types.SearchUserSuccess:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.CreateUserSuccess:
    case types.UpdateUserSuccess:
      return {
        ...state,
        loading: false,
      };
    case types.DeleteUserSuccess:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case types.Error:
    case types.CreateUserError:
    case types.DeleteUserError:
    case types.UpdateUserError:
    case types.SearchUserError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

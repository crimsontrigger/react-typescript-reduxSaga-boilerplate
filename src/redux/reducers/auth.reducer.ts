import { AuthTypes } from '../types';
import { IAuthStoreState } from '../interfaces/IAuth';
import { parseJwt } from '../../utils';

const initialState: IAuthStoreState = {
  loading: false,
  user: null,
  error: null,
  token: null,
  firstLogin: true,
};

const authReducer = (state = initialState, action: any): IAuthStoreState => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case AuthTypes.LOGOUT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });

    case AuthTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: parseJwt(action.user.token),
        error: null,
        token: action.user.token,
        firstLogin: false,
      });

    case AuthTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: null,
        error: null,
        token: null,
      });

    case AuthTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error.message,
      });
    case AuthTypes.LOGOUT_ERROR:
      return Object.assign({}, state, {
        loading: false,
        success: false,
        error: action.error,
      });
    case AuthTypes.REGISTER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case AuthTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.user.user,
        error: null,
        token: action.user.token,
      });

    case AuthTypes.REGISTER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error.message,
      });
    default:
      return state;
  }
};

export default authReducer;

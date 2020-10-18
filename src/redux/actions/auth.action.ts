import { AuthTypes } from '../types';

// export const syncUser = () => ({ type: AuthTypes.SYNC_USER });

export const loginByEmail = (username: string, password: string) => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const RegisterByEmail = (
  email: string,
  password: string,
  username: string,
  name: string,
) => ({
  type: AuthTypes.REGISTER_REQUEST,
  payload: { email, password, username, name },
});
export const logout = () => ({ type: AuthTypes.LOGOUT });

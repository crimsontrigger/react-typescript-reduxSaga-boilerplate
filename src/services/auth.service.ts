import Axios from 'axios';
import { Service } from 'typedi';

import { SERVER_URI } from './constants';
import { IUserDTO } from '../interfaces/IUser';

const authRoute = `${SERVER_URI}/api/auth`;

@Service('AuthService')
class AuthService {
  public async login(userData: IUserDTO) {
    return Axios.post(`${authRoute}/signin`, userData);
  }

  public async register(userData: IUserDTO) {
    return Axios.post(`${authRoute}/signup`, userData);
  }
}

export default AuthService;

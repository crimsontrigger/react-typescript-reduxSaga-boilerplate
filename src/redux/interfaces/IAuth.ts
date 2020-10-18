export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IAuthStoreState {
  error: any;
  loading: Boolean;
  token: string | null;
  user: IUser | null;
  firstLogin: Boolean;
}

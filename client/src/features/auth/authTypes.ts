export interface Auth {
  id: string;
  username: string;
  password: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  point: number;
  verifyToken: string | null;
  expiredTokenTime: Date | null;
  createAt: Date;
  updateAt: Date | null;
  isEnable: boolean;
}
export interface AuthState {
  auth: Auth;
  loading: boolean;
  error: string | null;
}
export interface InputLogin {
  usernameOrEmail: string;
  password: string;
}

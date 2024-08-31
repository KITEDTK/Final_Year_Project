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
  auth: Auth | null;
  loading: boolean;
  error: string | null;
}
export interface InputLogin {
  usernameOrEmail: string;
  password: string;
}
export interface RegisterInput {
  username: string,
  password: string,
  fullname: string,
  phoneNumber: string,
  email: string,
}
export interface RegisterOutput {
  id: string;
  username: string | null;
  password: string | null;
  fullname: string | null;
  email: string | null;
  phoneNumber: string | null;
  point: number | null;
  verifyToken: string | null;
  expiredTokenTime: Date | null;
  createAt: Date | null;
  updateAt: Date | null;
  isEnable: boolean | null;
}

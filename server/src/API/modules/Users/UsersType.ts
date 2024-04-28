export interface User {
    username?: string;
    password?: string;
    fullname?: string;
    email?: string;
    phoneNumber?: string;
    point?: number;
    verifyToken?: string;
    expiredTokenTime?: Date;
}; 
export interface UserArray extends Array<User> {}


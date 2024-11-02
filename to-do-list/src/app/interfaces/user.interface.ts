export interface IUser {
    id: string;
    profileImageUrl?: string,
    name: string;
    email: string;
    username: string,
    password: string;
    role?: "ADMIN" | "USER",
    address_id: null | number;
}
  
  
export type IUserReq = Omit<IUser, 'id' | 'address_id'>;
  
export type ILoginReq = Pick<IUser, 'email' | 'password'>; 
  
export type IUserResp = Omit<IUser, 'password'>;
  
export interface ILoginResp {
    name: string;
    token: string;
}
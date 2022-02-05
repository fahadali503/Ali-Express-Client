import { IUser } from "../../store/types/user/UserState";

export interface IAuthResponse {
    token: string;
    user: IUser
}
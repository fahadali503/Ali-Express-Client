export interface IUser {
    _id: string;
    email: string;
    role: string;
}

export interface UserState {
    user: IUser | null;
    token: string | null;
}
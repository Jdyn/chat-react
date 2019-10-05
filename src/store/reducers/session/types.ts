import IUser from "../../../models/IUser";

export interface SessionState {
    isLoggedIn: boolean;
    user: IUser | null;
}
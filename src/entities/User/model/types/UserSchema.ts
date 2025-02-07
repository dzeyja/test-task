import { User } from "./user";

export interface UserSchema {
    authData: User
    isAuth: boolean
}
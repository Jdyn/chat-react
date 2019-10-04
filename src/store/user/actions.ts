import IUser from "../../models/IUser"
import { USER_LOADED } from "./types"

export function setCurrentUser(user: IUser) {
  return {
    type: USER_LOADED,
    user
  }
}
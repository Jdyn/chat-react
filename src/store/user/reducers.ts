import { Action } from "redux"
import { USER_LOADED } from "./types"
import IUser from "../../models/IUser"

interface UserAction extends Action {
  user: IUser
}

export default (state: IUser | null = null, action: UserAction): IUser | null => {
  switch(action.type) {
    case USER_LOADED:
      return action.user
    default:
      return state
  }
}
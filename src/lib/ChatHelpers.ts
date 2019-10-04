import IUser from "../models/IUser";

export function fullName(user: IUser): string {
  return `${user.first_name} ${user.last_name}`
}
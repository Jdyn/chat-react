import IUser from "../models/IUser"
import { IMessageImage } from "../models/IMessage"
import IChat from "../models/IChat"
import moment from "moment"

export function fullName(user: IUser): string {
  return `${user.first_name} ${user.last_name}`
}

interface ImageContraints {
  height: string
  width: string
}

export const MAX_IMAGE_SIZE = 400

/**
 * Calculate the CSS properties for a message image. It will constrain
 * the the image's height and width so that either will be a maximum of
 * MAX_IMAGE_SIZE by default.
 * 
 * @param image The image to calculate constraints for.
 * @param max The maximum size of the image bounds.
 */
export function imageConstraints(image: IMessageImage, max: number = MAX_IMAGE_SIZE): ImageContraints {
  const calculateConstraint = (first: number, second: number): string => (
    (first > second && first > max) ?
      "auto" :
      second > max ?
        `${max}px` :
        second + "px"
  )

  return {
    height: calculateConstraint(image.width, image.height),
    width: calculateConstraint(image.height, image.width)
  }
}

export function shortTimestamp(date: string): string {
  const momentDate = moment(date)
  const daysDifference = moment().diff(momentDate, "days")

  if(daysDifference === 0) {
    return momentDate.format("h:mm A")
  } else if(daysDifference <= 7) {
    return momentDate.format("ddd")
  } else {
    return momentDate.format("M/D/YY")
  }
}

export function lastActive(chat: IChat): number {
  return chat.last_message ? moment(chat.last_message!!.sent_at).unix() : 0
}
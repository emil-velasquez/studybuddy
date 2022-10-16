import { ObjectId } from "mongodb";

export default interface BuddyCardType {
    id?: ObjectId,
    userId: ObjectId,
    building: string,
    startTime: number,
    endTime: number,
    description: string
}
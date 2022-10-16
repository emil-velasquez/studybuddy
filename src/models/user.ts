import { ObjectId } from "mongodb";

export default interface UserType {
    id?: ObjectId,
    name: string,
    email: string,
    age: number,
    major: string,
    pronouns: number,
    class: number
}
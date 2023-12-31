import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {type: String, required: true},
    name: {
        firstName: {type: String, required: true},
        middleName: {type: String},
        lastName: {type: String, required: true}
    },
    email : {type: String},
    contactNo: {type: String, required: true},
    presentAddress : {type:String, required: true},
    permanentAddress :{ type: String},

})
// creating a model
const User = model<IUser>('User', userSchema);

export default User;
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    console.log(`New user has been added to db ${user.name.firstName+  ' '+  user.name.middleName+ ' '+ user.name.lastName}`)
    return user;
};


export const getUsersFromDB = async (): Promise<IUser[]> =>{
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string) : Promise<IUser | null>=>{
    const user = await User.findOne({id: payload}, {name: 1, email: 1});
    return user;
}


        // id: '212',
        // name:{ 
        //     firstName: 'Shakib',
        //     middleName: 'Al',
        //     lastName: 'Hasan'
        // },
        // email : 'sakib@gmail.com',
        // contactNo: '0191929',
        // presentAddress : 'dhaka',
        // permanentAddress : 'dhaka',
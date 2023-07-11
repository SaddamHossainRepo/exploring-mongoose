export interface IUser{
    id: string;
    name: {
        firstName: string,
        middleName ?: string,
        lastName: string
    };
    email ?: string;
    contactNo: string;
    presentAddress : string;
    permanentAddress ?: string;
}
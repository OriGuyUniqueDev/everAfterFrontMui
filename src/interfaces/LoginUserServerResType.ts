import { TypeOfUserType } from "./TypeOfUserType";

export default interface LoginUserServerResType {
	access_token: string;
	connectedUsers: [];
	email: string;
	id: string;
	typeOfUser: TypeOfUserType;
}

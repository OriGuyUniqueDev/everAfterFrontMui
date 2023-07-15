import { TypeOfUserType } from "./TypeOfUserType";

export default interface RegistrationDataType {
	email: string;
	password: string;
	businessAccount: boolean;
	typeOfUser: TypeOfUserType;
	eventPannerName: string;
	fullName: string;
	brideName: string;
	groomName: string;
	eventData: string;
}

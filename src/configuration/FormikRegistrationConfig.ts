import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { TypeOfUserType } from "@/interfaces/TypeOfUserType";
import * as yup from "yup";
const FormikRegistrationConfig = {
	initialValues: {
		email: "",
		password: "",
		brideName: "",
		businessAccount: false,
		eventPannerName: "",
		fullName: "",
		groomName: "",
		typeOfUser: TypeOfUserType.private,
	} as RegistrationDataType,
	validationSchema: yup.object().shape({
		email: yup.string().required().email("Invalid Email"),
		password: yup.string().required().min(6, "Too Short, Should be at least 6 characters"),
		businessAccount: yup.boolean().required(),
		brideName: yup.string().when("businessAccount", ([businessAccount]) => {
			if (businessAccount) return yup.string().notRequired().max(0);
			return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
		}),
		eventPannerName: yup.string().when("businessAccount", ([businessAccount]) => {
			if (businessAccount) return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
			return yup.string().notRequired().max(0);
		}),
		fullName: yup.string().when("businessAccount", ([businessAccount]) => {
			if (businessAccount) return yup.string().notRequired().max(0);
			return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
		}),
		groomName: yup.string().when("businessAccount", ([businessAccount]) => {
			if (businessAccount) return yup.string().notRequired().max(0);
			return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
		}),
		typeOfUser: yup.string().equals([TypeOfUserType]).required(),
	}),
	onSubmit(values: RegistrationDataType) {},
};
export default FormikRegistrationConfig;

import LoginDataType from "@/interfaces/LoginDataType";
import * as yup from "yup";

const FormikLoginConfig = {
	initialValues: {
		email: "",
		password: "",
	} as LoginDataType,
	validationSchema: yup.object({
		email: yup.string().required().email("Invalid Email"),
		password: yup.string().required().min(6, "Too Short, Should be at least 6 characters"),
	}),
	onSubmit(values: LoginDataType) {
		console.log(values);
	},
};
export default FormikLoginConfig;

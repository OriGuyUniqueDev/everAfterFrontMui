import LoginDataType from "@/interfaces/LoginDataType";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import { login } from "@/services/userService";
import axios from "axios";
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
	async onSubmit(values: LoginDataType) {
		await login(values)
			.then((data) => successMsg("dfdf"))
			.catch((err) => errorMsg(`${err.response.data.message}, Please try Again`));
	},
};
export default FormikLoginConfig;

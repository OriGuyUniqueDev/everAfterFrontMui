import LoginDataType from "@/interfaces/LoginDataType";
import axios from "axios";
import { errorMsg, successMsg } from "./toastsMsg";

export async function login(userData: LoginDataType) {
	return await axios
		.post("http://localhost:3000/login", userData)
		.then((data) => data)
		.then((err) => err);
}

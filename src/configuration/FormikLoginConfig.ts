import LoginDataType from "@/interfaces/LoginDataType";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import { login } from "@/services/userService";
import { useSignIn } from "react-auth-kit";

import axios from "axios";
import * as yup from "yup";
const FormikLoginConfig = {};
export default FormikLoginConfig;

// .then((data) => successMsg("dfdf"))
// .catch((err) => errorMsg(`${err.response.data.message}, Please try Again`));

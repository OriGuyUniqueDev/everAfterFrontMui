import { toast } from "react-toastify";

export function successMsg(msg: string) {
	toast.success(msg, {
		position: "top-center",
		autoClose: 5000,
	});
}
export function errorMsg(msg: string) {
	toast.error(msg, {
		position: "top-center",
		autoClose: 5000,
		theme: "dark",
	});
}

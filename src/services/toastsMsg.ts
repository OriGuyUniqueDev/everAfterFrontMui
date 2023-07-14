import { toast } from "react-toastify";

export function successMsg(msg: string) {
	toast.success(msg, {
		position: "bottom-center",
		autoClose: 3000,
		theme: "dark",
	});
}
export function errorMsg(msg: string | undefined) {
	toast.error(msg, {
		position: "bottom-center",
		autoClose: 3000,
		theme: "dark",
	});
}

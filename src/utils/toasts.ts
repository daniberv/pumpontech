import toast from "react-hot-toast";

export default {
    success(msg: string, options?) {
        return toast.success(msg);
    },
    error(msg: string, options?) {
        return toast.error(msg);
    },
};

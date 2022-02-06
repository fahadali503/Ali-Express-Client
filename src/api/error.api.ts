import { ApiResponse } from "apisauce";
import toast from "react-hot-toast";

export const handleApiError = (response: ApiResponse<any>) => {
    if (typeof window !== 'undefined') {
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.message)
        }
    }
}
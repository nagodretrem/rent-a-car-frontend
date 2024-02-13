import { AxiosResponse } from "axios";
import { signupRequest } from "../models/signup/requests/signupRequest";
import axiosInstance from "../utils/interceptors/axiosInterceptors";

class SignUpService{
    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/register";
	}
    signup(request:signupRequest): Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl, request);
    }

}
export default new SignUpService();
import { AxiosResponse } from "axios";
import { loginRequest } from "../models/login/requests/loginRequest";
import axiosInstance from "../utils/interceptors/axiosInterceptors";


class AuthService{
    public apiUrl: string;
    constructor() {
		this.apiUrl = "auth/login";
	}
    login(request:loginRequest): Promise<AxiosResponse<string,any>>{
        return axiosInstance.post<string>(this.apiUrl, request);
    }
}
export default new AuthService();

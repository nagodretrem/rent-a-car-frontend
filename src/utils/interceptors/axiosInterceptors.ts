import axios from "axios";
import tokenService from "../../services/tokenService";



const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use((config)=>{

   
    let token=tokenService.getToken();
    if(token) config.headers.Authorization=`Bearer ${token}`;

    return Promise.resolve(config)

   // return config;
});
axiosInstance.interceptors.response.use((response)=>{
   
    return Promise.resolve(response)

   // return response;
}, error =>{
  
    
   
    return Promise.reject(error);

    
});

export default axiosInstance;
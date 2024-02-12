import axios from "axios";
import tokenService from "../../services/tokenService";



const axiosInstance = axios.create({
    baseURL: "http://16.171.12.88:8080/api/",
});

axiosInstance.interceptors.request.use((config)=>{

   
    let token=tokenService.getToken();
    if(token) config.headers.Authorization=`Bearer ${token}`;

    
   return config;
});
axiosInstance.interceptors.response.use((response)=>{
   
  

  return response;
}, error =>{

});

export default axiosInstance;
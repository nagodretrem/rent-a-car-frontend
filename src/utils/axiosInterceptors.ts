import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use((config)=>{
    console.log("İstek atılıyor..")
    config.headers.Authorization= "Bearer " + localStorage.getItem("token");
    config.headers["Accept-Language"] ="tr"; //default bir şey yazılabilir
    return config;
});
axiosInstance.interceptors.response.use((response)=>{
    console.log("Cevap geldi")
    return response;
}, error =>{
   // if(error.data.type =="BusinessException")
//    if(error.data.status == 409){
//     alert(error.data.message);
//    }
//    if(error.data.type = "ValidationFailed")
//    {
//     error.data.message.forEach((message:any) => alert(message))
//    }
//switch-case yapısıyla
// switch(error.data.error){
//     case "ValidationFailed":
//         break;
//     case "ResourceAlreadyExists":
//         break;
// }
    console.log(error);
});

export default axiosInstance;
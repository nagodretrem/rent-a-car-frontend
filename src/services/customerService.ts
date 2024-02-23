import { AddCustomerRequest } from "../models/customer/request/addCustomerRequest";
import { UpdateCustomerRequest } from "../models/customer/request/updateCustomerRequest";
import { AddCustomerResponse } from "../models/customer/response/addCustomerResponse";
import { GetAllCustomerResponse } from "../models/customer/response/getAllCustomerResponse";
import { GetByIdCustomerResponse } from "../models/customer/response/getByIdCustomerResponse";
import { UpdateCustomerResponse } from "../models/customer/response/updateCustomerResponse";
import { BaseService } from "./baseService";

class CustomerService extends BaseService<GetAllCustomerResponse,
GetByIdCustomerResponse,
AddCustomerRequest,
AddCustomerResponse,
UpdateCustomerRequest,
UpdateCustomerResponse
>{
  constructor() {
		super();
		this.apiUrl = "customers";
	}


}

export default new CustomerService();
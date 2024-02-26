import { AddInvoiceRequest } from "../models/invoices/requests/addInvoiceRequest";
import { UpdateInvoiceRequest } from "../models/invoices/requests/updateInvoiceRequest";
import { AddInvoiceResponse } from "../models/invoices/response/addInvoiceResponse";
import { GetAllInvoiceResponse } from "../models/invoices/response/getAllInvoiceResponse";
import { GetByIdInvoiceResponse } from "../models/invoices/response/getbByIdInvoiceResponse";
import { UpdateInvoiceResponse } from "../models/invoices/response/updateInvoiceResponse";
import axiosInstance from "../utils/interceptors/axiosInterceptors";
import { BaseService } from "./baseService";

class InvoiceService extends BaseService<GetAllInvoiceResponse,
GetByIdInvoiceResponse,
AddInvoiceRequest,
AddInvoiceResponse,
UpdateInvoiceRequest,
UpdateInvoiceResponse
>{
  constructor() {
		super();
		this.apiUrl = "invoices";
	}
	async getByOwnerUser(ownerUser:number):Promise<GetAllInvoiceResponse>{
		const url = `${this.apiUrl}/profile/${ownerUser}`;
		const response= await axiosInstance.get<GetAllInvoiceResponse>(url);
		return response.data;

	}

}

export default new InvoiceService();
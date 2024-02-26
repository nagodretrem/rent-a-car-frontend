import { AddDiscountRequest } from "../models/discount/request/addDiscountRequest";
import { UpdateDiscountRequest } from "../models/discount/request/updateDiscountRequest";
import { AddDiscountResponse } from "../models/discount/response/addDiscountResponse";
import { GetAllDiscountResponse } from "../models/discount/response/getAllDiscountResponse";
import { GetByIdDiscountResponse } from "../models/discount/response/getByIdDiscountResponse";
import { UpdateDiscountResponse } from "../models/discount/response/updateDiscountResponse";
import axiosInstance from "../utils/interceptors/axiosInterceptors";
import { BaseService } from "./baseService";

class DiscountService extends BaseService<GetAllDiscountResponse,
GetByIdDiscountResponse,
AddDiscountRequest,
AddDiscountResponse,
UpdateDiscountRequest,
UpdateDiscountResponse
>{
  constructor() {
		super();
		this.apiUrl = "discount";
	}

	async getByStringCode(stringCode: string): Promise<GetByIdDiscountResponse> {
		const url = `${this.apiUrl}/${stringCode}`;
		const response = await axiosInstance.get<GetByIdDiscountResponse>(url);
		return response.data;
	  }
	}
	

export default new DiscountService();
import { AddColorRequest } from "../models/color/requests/addColorRequest";
import { UpdateColorRequest } from "../models/color/requests/updateColorRequest";
import { AddColorResponse } from "../models/color/response/addColorResponse";
import { GetAllColorResponse } from "../models/color/response/getAllColorResponse";
import { GetByIdColorResponse } from "../models/color/response/getByIdColorResponse";
import { UpdateColorResponse } from "../models/color/response/updateColorResponse";
import { BaseService } from "./baseService";

class ColorService extends BaseService<GetAllColorResponse,
GetByIdColorResponse,
AddColorRequest,
AddColorResponse,
UpdateColorRequest,
UpdateColorResponse
>{
  constructor() {
		super();
		this.apiUrl = "colors";
	}


}

export default new ColorService();
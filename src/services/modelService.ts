import { AddModelRequest } from "../models/model/requests/addModelRequest";
import { UpdateModelRequest } from "../models/model/requests/updateModelRequest";
import { AddModelResponse } from "../models/model/response/addModelResponse";
import { GetAllModelResponse } from "../models/model/response/getAllModelResponse";
import { GetByIdModelResponse } from "../models/model/response/getByIdModelResponse";
import { UpdateModelResponse } from "../models/model/response/updateModelResponse";
import { BaseService } from "./baseService";

class ModelService extends BaseService<GetAllModelResponse,GetByIdModelResponse,
AddModelRequest,AddModelResponse,UpdateModelRequest,UpdateModelResponse>{
    constructor() {
          super();
          this.apiUrl = "models";
      }
  
  
  }

export default new ModelService();
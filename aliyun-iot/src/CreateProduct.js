import {AliIotBasicAction, schema} from './utils';

class CreateProduct extends AliIotBasicAction {
  constructor(name=null, desc=null ,catid=null) {
    super({});
    this.paramMap.Action = 'CreateProduct';
    this.paramMap.CatId = 10000;
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ProductInfo:Object,
      ErrorMessage : String,
    });
  }

  setProduct(name,catid,desc) {
    this.paramMap.Name = name;
    this.paramMap.CatId = catid;
    this.paramMap.Desc = desc;
    return this;
  }

}

export default CreateProduct;

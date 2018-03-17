import {AliIotBasicAction, schema} from './utils';

class UpdateProduct extends AliIotBasicAction {
  constructor(productKey,productName=null,productDesc=null) {
    super({});
    this.paramMap.Action = 'UpdateProduct';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
    });
  }

  setProduct(productName,productDesc) {
    this.paramMap.ProductName = productName;
    this.paramMap.ProductDesc = productDesc;
    return this;
  }

}

export default UpdateProduct;
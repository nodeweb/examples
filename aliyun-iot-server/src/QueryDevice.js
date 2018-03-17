import {AliIotBasicAction, schema} from './utils';

class QueryDevice extends AliIotBasicAction {
  constructor(productKey,pageSize=null,currentPage=null) {
    super({});
    this.paramMap.Action = 'QueryDevice';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      Total:Number,
      Data:Array,
    });
  }

  getList(pageSize,currentPage) {
    this.paramMap.PageSize = pageSize;
    this.paramMap.CurrentPage = currentPage;
    return this;
  }

}

export default QueryDevice;
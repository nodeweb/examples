import {AliIotBasicAction, schema} from './utils';

class QueryPageByApplyId extends AliIotBasicAction {
  constructor(applyId=null,pageSize=null,currentPage=null) {
    super({});
    this.paramMap.Action = 'QueryPageByApplyId';
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      PageSize:Number,
      Page:Number,
      PageCount:Number,
      Total:Number,
      ApplyDeviceList:Array,
    });
  }

  getList(applyId,pageSize,currentPage) {
    this.paramMap.ApplyId = applyId;
    this.paramMap.PageSize = pageSize;
    this.paramMap.CurrentPage = currentPage;
    return this;
  }

}

export default QueryPageByApplyId;
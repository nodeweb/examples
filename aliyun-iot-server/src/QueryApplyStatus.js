import {AliIotBasicAction, schema} from './utils';

class QueryApplyStatus extends AliIotBasicAction {
  constructor(applyId=null) {
    super({});
    this.paramMap.Action = 'QueryApplyStatus';
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      Finish:Boolean,
    });
  }

  setApplyId(applyId) {
    this.paramMap.ApplyId = applyId;
    return this;
  }

}

export default QueryApplyStatus;
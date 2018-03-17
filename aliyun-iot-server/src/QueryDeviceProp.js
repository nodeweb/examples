import {AliIotBasicAction, schema} from './utils';

class QueryDeviceProp extends AliIotBasicAction {
  constructor(productKey,deviceName=null) {
    super({});
    this.paramMap.Action = 'QueryDeviceProp';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      Props:String,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

}

export default QueryDeviceProp;
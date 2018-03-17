import {AliIotBasicAction, schema} from './utils';

class DeleteDeviceProp extends AliIotBasicAction {
  constructor(productKey,deviceName=null,propKey=null) {
    super({});
    this.paramMap.Action = 'DeleteDeviceProp';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
    });
  }

  setDeviceProp(deviceName,propKey) {
    this.paramMap.DeviceName = deviceName;
    this.paramMap.PropKey = propKey;
    return this;
  };

}

export default DeleteDeviceProp;
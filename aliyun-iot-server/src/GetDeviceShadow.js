import {AliIotBasicAction, schema} from './utils';

class GetDeviceShadow extends AliIotBasicAction {
  constructor(productKey,deviceName=null) {
    super({});
    this.paramMap.Action = 'GetDeviceShadow';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      ShadowMessage:String,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

}

export default GetDeviceShadow;
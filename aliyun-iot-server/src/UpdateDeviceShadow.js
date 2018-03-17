import {AliIotBasicAction, schema} from './utils';

class UpdateDeviceShadow extends AliIotBasicAction {
  constructor(productKey,deviceName=null,shadowMessage=null) {
    super({});
    this.paramMap.Action = 'UpdateDeviceShadow';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

  setShadowMessage(shadowMessage) {
    this.paramMap.ShadowMessage = shadowMessage;
    return this;
  };

}

export default UpdateDeviceShadow;
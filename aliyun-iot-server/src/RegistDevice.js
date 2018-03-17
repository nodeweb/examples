import {AliIotBasicAction, schema} from './utils';

class RegistDevice extends AliIotBasicAction {
  constructor(productKey, deviceName) {
    super({});
    this.paramMap.Action = 'RegistDevice';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      DeviceId : String,
      DeviceName : String,
      DeviceSecret : String,
      DeviceStatus : String,
      ErrorMessage : String,
    });
  }
  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  }
}

export default RegistDevice;

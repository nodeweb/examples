import {AliIotBasicAction, schema} from './utils';

class QueryDeviceByName extends AliIotBasicAction {
  constructor(productKey,deviceName=null) {
    super({});
    this.paramMap.Action = 'QueryDeviceByName';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      DeviceInfo:Object,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

}

export default QueryDeviceByName;
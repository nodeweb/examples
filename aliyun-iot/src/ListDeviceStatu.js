import {AliIotBasicAction, schema} from './utils';

class ListDeviceStatu extends AliIotBasicAction {
  constructor(productKey, deviceNames) {
    super({});
    this.paramMap.Action = 'RegistDevice';
    this.setProductKey(productKey).setDeviceName(deviceNames);
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      DeviceStatusList : Array,
      ErrorMessage : String,
    });
  }
  setDeviceName(deviceName) {
    this.paramMap.DeviceNames = deviceNames;
    return this;
  }
}

export default ListDeviceStatu;
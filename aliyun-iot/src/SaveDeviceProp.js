import {AliIotBasicAction, schema} from './utils';

class SaveDeviceProp extends AliIotBasicAction {
  constructor(productKey,deviceName=null,props=null) {
    super({});
    this.paramMap.Action = 'SaveDeviceProp';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
    });
  }

  setDeviceProps(deviceName,props) {
    this.paramMap.DeviceName = deviceName;
    this.paramMap.Props = props; //--json string
    return this;
  };

}

export default SaveDeviceProp;
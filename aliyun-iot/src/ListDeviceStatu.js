import {AliIotBasicAction, schema} from './utils';
import async from 'async';

class ListDeviceStatu extends AliIotBasicAction {
  constructor(productKey, deviceNames) {
    super({});
    this.paramMap.Action = 'BatchGetDeviceState';
    this.setProductKey(productKey).setDeviceName(deviceNames);
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      DeviceStatusList : Array,
      ErrorMessage : String,
    });
  }
  setDeviceName(deviceNames) {
    let i = 1
    async.every(deviceNames,function(one, callback) {
       let name = 'DeviceName.' + i;
       this.paramMap[name] = one;
       i++;
    },function(err, result){
      return this;
    })
  }
}

export default ListDeviceStatu;
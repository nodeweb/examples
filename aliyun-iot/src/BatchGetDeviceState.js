import {AliIotBasicAction, schema} from './utils';


let  asyncFunc = function(deviceName, i,elem) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              let name = 'DeviceName.'+(parseInt(i) +1);
              elem.paramMap[name] = deviceName;
              resolve();
          }, 100);
      });
  }


class BatchGetDeviceState extends AliIotBasicAction {
  constructor(productKey, deviceNames=[]) {
    super({});
    this.paramMap.Action = 'BatchGetDeviceState';
    this.setProductKey(productKey).setList(deviceNames)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      DeviceStatusList : String,
      ErrorMessage : String,
    });
  }



  async setList(deviceNames) {
       let elem = this
       for(let i in deviceNames){
          await asyncFunc(deviceNames[i], i,elem);
       }
       return elem
  }

}

export default BatchGetDeviceState;
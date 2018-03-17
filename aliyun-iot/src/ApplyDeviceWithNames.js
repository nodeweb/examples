import {AliIotBasicAction, schema} from './utils';


let  asyncFunc = function (deviceName,i,elem) {
     new Promise((resolve,reject) => {
        setTimeout(() => {
          let name = 'DeviceName.' + (parseInt(i)+1);
          elem.paramMap[name] = deviceName
          resolve()
        },100)
     })
}


class ApplyDeviceWithNames extends AliIotBasicAction {
  constructor(productKey,deviceNames) {
    super({});
    this.paramMap.Action = 'ApplyDeviceWithNames';
    this.setProductKey(productKey)
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      ErrorMessage : String,
      ApplyId:Number,
    });
  }

  async setList(deviceNames) {
    let elem = this;
    for(let i in deviceNames){
       await asyncFunc(deviceNames[i],i,elem)
    } 
    return elem
  }

}

export default ApplyDeviceWithNames;
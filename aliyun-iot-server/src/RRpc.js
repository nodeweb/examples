import {AliIotBasicAction, schema} from './utils';

class RRpc extends AliIotBasicAction {
  constructor(productKey = null, deviceName = null, timeout = null) {
    super({});
    this.paramMap.Action = 'RRpc';
    this.setProductKey(productKey).setDeviceName(deviceName).setTimeOut(timeout);
    this.resSchema = schema({
      RequestId:String,
      RrpcCode: String,
      ErrorMessage:String,
      Success: Boolean,
      PayloadBase64Byte:String,
      MessageId: String,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

  setRpcContent(rpcContent) {
    if (!(rpcContent instanceof Buffer)) {
      rpcContent = String(rpcContent);
    }
    this.paramMap.RequestBase64Byte = new Buffer(rpcContent).toString('base64');
    return this;
  }

  setTimeOut(timeout) {
    this.paramMap.Timeout = timeout;
    return this;
  }
}

export default RRpc;

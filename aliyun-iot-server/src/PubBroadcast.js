import {AliIotBasicAction, schema} from './utils';

class PubBroadcast extends AliIotBasicAction {
  constructor(productKey, deviceName, messageContent, topicFullName) {
    super({});
    this.paramMap.Action = 'PubBroadcast';
    this.setProductKey(productKey).setMessageContent(messageContent).setTopicFullName(topicFullName);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }

  setMessageContent(messageContent) {
    if (!(messageContent instanceof Buffer)) {
      messageContent = String(messageContent);
    }
    this.paramMap.MessageContent = new Buffer(messageContent).toString('base64');
    return this;
  }
  setTopicFullName(topicFullName) {
    this.paramMap.TopicFullName = topicFullName;
    return this;
  }
}

export default PubBroadcast;
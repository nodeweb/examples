const AcsClient = require('./lib/index').AcsClient
const BatchGetDeviceState = require('./lib/index').BatchGetDeviceState;
const QueryDevice = require('./lib/index').QueryDevice;

var main = async function() {
  let acsClient = new AcsClient('LTAIB5cvBJcMuHit', '4usqXtuoT4XClkmJOIf07fUotkB5Mj');
  let list = ['box_test','36Cbf1lk4HYTCH1cSuhW','rj7DIcxXvK2DqLpzFrYp','hao123'];
  try{
    let action = null;

    //设备状态列表    
    //action = new BatchGetDeviceState().setProductKey('7VJcjCjxKSh')
    //action = await action.setList(list);

    //设备详情
    action = new QueryDevice().setProductKey('7VJcjCjxKSh').getList(20,1)


    let data = await acsClient.doAction(action);
    console.log(data['Data']);
  }catch(e){
    console.error(e);
  }

};

main();

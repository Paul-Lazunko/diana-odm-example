import { odm } from './odm';

async function start () {
  await odm.connect();
  const userModel = odm.getModel('user');
  const postModel = odm.getModel('post');
  // Do something
  odm.disconnect()
}

start().catch(error => console.log);

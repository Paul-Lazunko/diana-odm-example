import { odm } from './odm';

async function start () {
 try {
   await odm.connect();
   const userModel = odm.getModel('user');
   const postModel = odm.getModel('post');

   // Do something

   odm.disconnect()
 } catch(e) {
   console.log(e);
 }
}

start().catch(error => console.log);

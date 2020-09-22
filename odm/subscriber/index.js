import { odm } from '../client';

odm.setSubscriber({
  handler: data => {
    console.log({ data });
  }
});

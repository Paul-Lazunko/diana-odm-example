import { odm } from '../client';
import { userSchema } from '../schemas';

odm.setModel('user', {
  database: 'test',
  collection: 'users',
  schema: userSchema
});

import { odm } from '../client';
import { postSchema } from '../schemas';

odm.setModel('post', {
  database: 'test',
  collection: 'posts',
  schema: postSchema
});

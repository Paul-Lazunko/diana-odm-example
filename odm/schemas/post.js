import { Types } from 'diana-db-odm';

export const postSchema = {
  name: {
    type: Types.STRING,
    isRequired: true
  },
  user: {
    type: Types.REFERENCE,
    reference: 'users'
  },
  isActive: {
    type: Types.BOOLEAN,
    default: true
  },
  createdAt: {
    type: Types.TIME,
    isRequired: true
  }
};

import { Types } from 'diana-db-odm';

export const userSchema = {
  name: {
    type: Types.STRING,
    isUnique: true,
    isRequired: true
  },
  isActive: {
    type: Types.BOOLEAN,
    default: true
  },
  position: {
    type: Types.POSITION
  },
  createdAt: {
    type: Types.TIME,
    isRequired: true
  }
};

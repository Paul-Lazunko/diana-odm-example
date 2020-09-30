import { Types } from 'diana-db-odm';

export const userSchema = {
  name: {
    type: Types.STRING,
    isUnique: true,
    isRequired: true
  },
  age: {
    type: Types.NUMBER,
    default: 0
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
    default: () => {
      return new Date().toISOString()
    }
  }
};

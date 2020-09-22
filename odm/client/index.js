import { DianaODM } from 'diana-db-odm';

export const odm = new DianaODM({
  host: 'localhost',
  port: 34567,
  secureKey: 'someSecureKey',
  doReconnectOnClose: true,
  requestTimeout: 10000,
  reconnectInterval: 5000
});

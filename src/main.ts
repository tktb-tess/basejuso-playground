import { toBaseJuso, fromBaseJuso } from '../lib/main';

Object.defineProperties(window, {
  toBaseJuso: {
    value: toBaseJuso,
    enumerable: true,
  },
  fromBaseJuso: {
    value: fromBaseJuso,
    enumerable: true,
  },
});

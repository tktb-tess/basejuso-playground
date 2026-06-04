import { it, describe } from 'vitest';
import { toBaseJuso, fromBaseJuso } from '../lib/main';

describe('foo', () => {
  it('correctly', (ctx) => {
    const bin = new Uint8Array(128);

    for (let i = 0; i < 10000; i++) {
      crypto.getRandomValues(bin);
      const d = fromBaseJuso(toBaseJuso(bin));
      ctx.expect(bin).toStrictEqual(d);
    }
  });
});

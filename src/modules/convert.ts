import { fromBaseJuso, toBaseJuso } from '@tktb-tess/util-fns/basejuso';

export function encodeToBaseJuso(txt: string) {
  const utf16 = Uint16Array.from({ length: txt.length }, (_, i) =>
    txt.charCodeAt(i),
  );
  const bin = new Uint8Array(utf16.buffer);
  return toBaseJuso(bin);
}

export function decodeBaseJuso(encoded: string) {
  const bin = fromBaseJuso(encoded);
  const utf16 = new Uint16Array(bin.buffer);
  return utf16.reduce((acc, cur) => acc + String.fromCharCode(cur), '');
}

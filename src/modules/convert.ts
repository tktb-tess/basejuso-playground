import { fromBaseJuso, toBaseJuso } from '@tktb-tess/util-fns/basejuso';

export async function encode(txt: string): Promise<string> {
  const stre = new Blob([txt])
    .stream()
    .pipeThrough(new CompressionStream('deflate-raw'));
  const bin = await new Response(stre).bytes();
  return toBaseJuso(bin);
}

export async function decode(encoded: string): Promise<string> {
  const bin = fromBaseJuso(encoded);
  const st = new Blob([bin])
    .stream()
    .pipeThrough(new DecompressionStream('deflate-raw'));
  return new Response(st).text();
}

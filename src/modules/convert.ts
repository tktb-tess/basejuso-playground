import { fromBaseJuso, toBaseJuso } from '@tktb-tess/util-fns/basejuso';

export async function compress(txt: string) {
  const st = new Blob([txt])
    .stream()
    .pipeThrough(new CompressionStream('deflate-raw'));
  const bin = await new Response(st).bytes();

  return toBaseJuso(bin);
}

export function decompress(juso: string) {
  const bin = fromBaseJuso(juso);
  const st = new Blob([bin])
    .stream()
    .pipeThrough(new DecompressionStream('deflate-raw'));

  return new Response(st).text();
}

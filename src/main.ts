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

const app = document.getElementById('app');

if (!(app instanceof HTMLDivElement)) {
  throw TypeError('!');
}

app.innerHTML = `<h1>Hallo! Wie geht es dir?</h1>`;

import './app.css';
import { mount } from 'svelte';
import App from './App.svelte';

const target = document.getElementById('app');
if (!(target instanceof HTMLDivElement)) {
  throw TypeError('unexpected');
}

export default mount(App, { target });

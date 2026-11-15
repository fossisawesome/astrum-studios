import { mount } from 'svelte';
import '@fontsource-variable/doto';
import '@fontsource-variable/space-grotesk';
import '@fontsource/space-mono/400.css';
import './app.css';
import App from './App.svelte';

const app = mount(App, { target: document.getElementById('app')! });

export default app;

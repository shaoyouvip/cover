import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';

const app = createApp(App);

const fontFamily = `${import.meta.env.VITE_FONT_FAMILY || 'sans-serif'}, sans-serif`;
document.documentElement.style.setProperty('--font-family', fontFamily);

if (import.meta.env.VITE_FONT_CSS_URL) {
  const fontStylesheet = document.createElement('link');
  fontStylesheet.rel = 'stylesheet';
  fontStylesheet.href = import.meta.env.VITE_FONT_CSS_URL;
  document.head.appendChild(fontStylesheet);
}

app.mount('#app');

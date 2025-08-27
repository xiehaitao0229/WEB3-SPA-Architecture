import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>
);

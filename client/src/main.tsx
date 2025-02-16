import { createRoot } from 'react-dom/client';

import App from './App';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(<App />);
}

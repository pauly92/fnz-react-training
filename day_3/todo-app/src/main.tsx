import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// const { server } = await import('./mocks/node.ts');
// server.listen();

// const { worker } = await import('./mocks/browser.ts');
// worker.start({waitUntilReady: true});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

async function bootstrapApp() {
  const { worker } = await import('./mocks/browser.ts');
  await worker.start();
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
bootstrapApp()
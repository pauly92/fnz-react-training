import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const { worker } = await import('./mocks/browser.ts');
worker.start();

// const { server } = await import('./mocks/node.ts');
// server.listen();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

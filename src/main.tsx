import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './pages/App.tsx'
import Globalstyles from './pages/style/globalstyles.ts'

// biome-ignore lint/style/noNonNullAssertion: <>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Globalstyles />
    <App />
  </StrictMode>,
)

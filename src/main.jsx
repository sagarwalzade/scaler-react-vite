import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1>Test Developer Code</h1>
    <h2>Test code</h2>
  </StrictMode>,
)

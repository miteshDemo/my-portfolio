import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MotionConfig } from 'framer-motion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig transition={{duration : 0.6, ease : "easeOut"}}>
      <App />
    </MotionConfig>
  </StrictMode>
)

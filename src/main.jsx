import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./assets/css/bootstrap.css"
import "./assets/css/style.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

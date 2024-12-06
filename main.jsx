import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import  Ccomp  from './Ccomp.jsx'
import  Pcomp  from './Pcomp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Pcomp/>
  </StrictMode>,
)

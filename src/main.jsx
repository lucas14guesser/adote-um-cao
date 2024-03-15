import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { EstilizacaoGlobal } from './styles/styles.js'
import Router from './router/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstilizacaoGlobal />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)

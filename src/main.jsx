import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'
import { TimelineProvider } from './context/TimelineContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimelineProvider>
        <App />
        <Toaster position="top-right" />
      </TimelineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
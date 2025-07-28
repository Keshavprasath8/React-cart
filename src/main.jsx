import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/addCart.js'

const store = configureStore({
  reducer: {
    cart:cartSlice
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
        <App />
    </Provider>
  
  </StrictMode>,
)

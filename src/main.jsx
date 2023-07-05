import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartContextProvider } from './store/cartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<CartContextProvider>
		<App />
	</CartContextProvider>
)

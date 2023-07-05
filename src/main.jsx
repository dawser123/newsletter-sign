import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SubscriptionContextProvider } from './store/SubscriptionContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<SubscriptionContextProvider>
		<App />
	</SubscriptionContextProvider>
)

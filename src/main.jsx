import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/Router'
import CardProvider from './providers/CardProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CardProvider>
			<Router />
		</CardProvider>
	</React.StrictMode>
)

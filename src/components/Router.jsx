import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Summary from './screens/Summary/Summary'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Summary />} path='/' />

				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router

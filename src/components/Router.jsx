import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllCards from './screens/AllCards/AllCards'
import Summary from './screens/Summary/Summary'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Summary />} path='/' />
				<Route element={<AllCards />} path='/cards' />
				<Route element={<AllCards />} path='/activity' />
				<Route element={<AllCards />} path='/recipients' />
				<Route element={<AllCards />} path='/help' />
				<Route element={<AllCards />} path='/gifts' />

				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router

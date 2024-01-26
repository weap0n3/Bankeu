import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardsDetail from './screens/CardsDetail/CardsDetail'
import Summary from './screens/Summary/Summary'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Summary />} path='/' />
				<Route element={<CardsDetail />} path='/cards' />
				<Route element={<CardsDetail />} path='/activity' />
				<Route element={<CardsDetail />} path='/recipients' />
				<Route element={<CardsDetail />} path='/help' />
				<Route element={<CardsDetail />} path='/gifts' />

				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router

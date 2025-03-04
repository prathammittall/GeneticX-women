import React from 'react'
import Navbar from './pages/components/Home/Navbar'
import Hero from './pages/components/Home/Hero'
import Stats from './pages/components/Home/Stats'
import Services from './pages/components/Home/Services'
import Pricing from './pages/components/Home/pricing'
import FAQ from './pages/components/Home/FAQ'
import Team from './pages/components/Home/Team'
import Footer from './pages/components/Home/Footer'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Stats />
			
			<div id="services">
				<Services />
			</div>
			<Team />
			<Pricing/>
			<FAQ />

			<Footer />
			
		</>
	)
}

export default App
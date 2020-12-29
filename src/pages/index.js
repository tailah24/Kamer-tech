import React from 'react'
import Middle1 from '../components/Middle-tab'
import Navbar from '../components/Navbar'
import Middle2 from '../components/Middle2'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Middle3 from '../components/Middle3'


function Main() {
		return(
			<div>
			<Navbar />
				< Middle1 />
				< Middle2 />
				< Banner />
				< Middle3 />
				< Footer />
			</div>

			)
}
export default Main
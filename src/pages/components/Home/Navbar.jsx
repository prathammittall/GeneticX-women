import React from 'react'

function Navbar() {
	return (
		<>
			<nav>
				<ul className=' flex justify-center items-center bg-black text-white h-12 gap-10'>
					<li className='cursor-pointer'><a href="/">Home</a></li>
					<li className='cursor-pointer'><a href="#services">Services</a></li>
					<li className='cursor-pointer'><a href="#FAQ">FAQ</a></li>
					<li className='cursor-pointer'><a href="#team">Team</a></li>
					<li className='cursor-pointer'><a href="https://lawgic-login-auth.vercel.app/">Login</a></li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
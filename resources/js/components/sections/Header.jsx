import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
	}, []);

	const handleChangeInput = (e) => {
		setSearchText(e.target.value);
	}
return (
	<>
		<div className='border-b-2 border-gray-500'>
			<div className="bg-neutral-900">
				<div className="container mx-auto 2xl:max-w-[1400px]">
					<div className="site-url flex justify-center">
						<h2 className='py-5 text-white text-3xl font-semibold tracking-widest font-yeseva'>
							www.isiro.id.vn
						</h2>
					</div>
				</div>
			</div>
			<div className='main-menu bg-zinc-100'>
			<div className="container mx-auto 2xl:max-w-[1400px]">	
				<nav className='xl:mx-16 xl:space-x-16 space-x-6 flex justify-center py-4'>
					<NavLink className='nav-item hover:scale-110' activeClassName='active' exact to='/'>Home</NavLink>
					<NavLink className='nav-item hover:scale-110' activeClassName='active' to='/wallet'>Album</NavLink>
					<NavLink className='nav-item hover:scale-110' activeClassName='active' to='/plan'>Models</NavLink>
					<NavLink className='nav-item hover:scale-110' activeClassName='active' to='/about'>About</NavLink>
					<NavLink className='nav-item hover:scale-110' activeClassName='active' to='/contact'>Contact</NavLink>
				</nav>
			</div>
			</div>
			<div className="container mx-auto 2xl:max-w-[1400px] px-3">
				<div className='flex items-center justify-between py-5'>
					<div className="logo font-semibold">
						<h2 className='tracking-widest leading-5 font-yeseva font-bold'>M R . I S I R O</h2>
					</div>
					<div>
						<button className="bg-emerald-500 px-16 py-1 text-white hover:bg-emerald-600 rounded">Blog</button>
					</div>
				</div>
			</div>
		</div>
	</>
)
}

export default Header
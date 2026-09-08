const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => { 
	return (
		<>
			<nav className="sticky top-0 bg-brand-bg z-50 border-b border-brand h-16 flex items-center justify-between px-4 lg:px-6">

				<div className="flex items-center gap-4 flex-1">

					<button
						onClick={onToggleSidebar}
						id="mobileMenuBtn" className="text-brand-text hover:text-brand-green transition-colors focus:outline-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="3" y1="12" x2="21" y2="12"></line>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="18" x2="21" y2="18"></line>
						</svg>
					</button>

					<a href="index.html" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-text hover:opacity-80 transition-opacity">
						SellerHub.
					</a>

					<div className="hidden md:flex relative ml-4 max-w-sm w-full">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg className="h-4 w-4 text-brand-text/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
						</div>
						<input type="text" placeholder="Search stories..." className="w-full pl-10 pr-4 py-2 bg-white border border-brand rounded-full text-sm focus-ring transition-colors"/>
					</div>
				</div>

				<div className="flex items-center gap-4 md:gap-6">

					<button className="md:hidden text-brand-text/70 hover:text-brand-text">
						<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</button>

					<a href="#" className="hidden sm:flex items-center gap-2 text-brand-text/80 hover:text-brand-text font-medium text-sm transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
							<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
						</svg>
						Write
					</a>

					<button className="text-brand-text/70 hover:text-brand-text relative transition-colors focus:outline-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
							<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
						</svg>
						<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-brand-green ring-2 ring-brand-bg"></span>
					</button>

					<button className="flex items-center focus:outline-none">
						<div className="w-8 h-8 rounded-full border border-brand overflow-hidden">
							<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e5e7eb" alt="Profile" className="w-full h-full object-cover"/>
						</div>
					</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar;
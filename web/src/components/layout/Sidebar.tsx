import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
	const location = useLocation();
	return (
		<>
			<div
				
				id="sidebarOverlay" className="fixed inset-0 bg-brand-text/20 backdrop-blur-sm z-40 hidden lg:hidden"></div>

			<aside
				id="sidebar"
				className={`w-64 border-r border-brand bg-brand-bg fixed inset-y-0 left-0 z-40 pt-16 lg:pt-0 lg:static lg:block transform -translate-x-full lg:translate-x-0 sidebar-transition h-screen lg:h-[calc(100vh-4rem)] flex flex-col ${isSidebarOpen ? 'translate-x-0' : ''}`}>
				<div className="flex-1 overflow-y-auto py-6 px-4">
					<ul className="space-y-1">
						<li>
							<Link to="/dashboard"
								className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium ${location.pathname === '/dashboard' ? 'bg-brand-green/10 text-brand-green' : 'text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text transition-colors'}`}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
								Home
							</Link>
						</li>

						<li>
							<Link to="/library" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium ${location.pathname === '/library' ? 'bg-brand-green/10 text-brand-green' : 'text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text transition-colors'}`}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
								Library
							</Link>
						</li>

						<li>
							<a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text font-medium transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								Profile
							</a>
						</li>
					</ul>

					<div className="mt-8 mb-4 border-t border-brand/10"></div>

					<h3 className="px-3 text-xs font-bold text-brand-text/40 uppercase tracking-wider mb-2">Creator Tools</h3>
					<ul className="space-y-1">

						<li>
							<a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text font-medium transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
								Stories
							</a>
						</li>

						<li>
							<a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text font-medium transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
								Stats
							</a>
						</li>
					</ul>

					<div className="mt-8 mb-4 border-t border-brand/10"></div>

					<ul className="space-y-1">
						<li>
							<a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-brand-text/70 hover:bg-brand-text/5 hover:text-brand-text font-medium transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
								Following
							</a>
						</li>
					</ul>
				</div>

				<div className="p-4 border-t border-brand/10">
					<a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500/80 hover:bg-red-50 hover:text-red-600 font-medium transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
						Sign out
					</a>
				</div>
			</aside>
		</>
	)
}

export default Sidebar;
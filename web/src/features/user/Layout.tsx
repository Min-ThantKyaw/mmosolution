import React from "react";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	console.log(isSidebarOpen)
	function toggleSidebar() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	  return (
		  <div className="font-sans antialiased flex flex-col min-h-screen overflow-x-hidden">
			  <Navbar
				  onToggleSidebar={toggleSidebar}
			  />
			  <div className="flex flex-1 overflow-hidden">
				  <Sidebar
					  isSidebarOpen={isSidebarOpen}
				  />
				  <main className="flex-1 p-4 lg:p-6">
					  {children}
				  </main>
			  </div>
		</div>
	  );
}

export default Layout;
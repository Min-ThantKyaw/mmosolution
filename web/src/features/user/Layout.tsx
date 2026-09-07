import React from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => { 
	  return (
		  <div className="font-sans antialiased flex flex-col min-h-screen overflow-x-hidden">
			  <Navbar />
			  <div className="flex flex-1 overflow-hidden">
				  <Sidebar />
				  <main className="flex-1 p-4 lg:p-6">
					  {children}
				  </main>
			  </div>
		</div>
	  );
}

export default Layout;
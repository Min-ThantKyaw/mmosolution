import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			 <header className="border-b border-brand sticky top-0 bg-brand-bg z-50">
        <div className="max-w-[1400px] mx-auto px-5 py-4 flex items-center justify-between">
   
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-brand-text">
                OSolutions.
            </Link>

       
            <div className="flex items-center gap-6">
 
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-brand-green transition-colors">Marketing Tips</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Success Stories</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Write</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Sign in</a>
                </nav>


                <a href="#" className="bg-brand-text text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors">
                    Join Community
                </a>
            </div>
        </div>
    </header>
		</>
	)
}

export default Navbar;
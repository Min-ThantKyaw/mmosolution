import AuthModal from "../../auth/components/AuthModal";
interface AuthFormProps {
    isOpen: boolean
    onClose: () => void;
    mode: 'login' | 'register';
    onModeChange: (mode: 'login' | 'register') => void;
}
const MainContent = ({ isOpen, onClose, mode, onModeChange }: AuthFormProps) => {
	return (
		<>
    <main className="flex-grow flex flex-col border-b border-brand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[60%_40%] flex-grow items-stretch relative">
            <div className="px-5 py-4 lg:py-4 flex flex-col justify-center z-10 lg:border-r lg:border-brand">
                <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[1.05] tracking-tight mb-8">
                    E-commerce <br/>
                    strategies <span className="font-sans text-5xl md:text-7xl lg:text-[6rem] font-light">&</span> insights
                </h1>
                <p className="text-xl md:text-2xl font-sans mb-10 max-w-xl text-brand-text/90">
                    A place to read, learn, and scale your online business. Discover tactics from successful sellers.
                </p>
                <div>
                    <a href="#" className="inline-block bg-brand-text text-white text-lg px-8 py-3 rounded-full hover:bg-black transition-colors">
                        Start learning
                    </a>
                </div>
            </div>

            <div className="hidden lg:flex items-end justify-center relative bg-brand-bg px-5 pt-10">
                <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-h-[600px] w-auto origin-bottom-right">
                    
                    <path d="M300 450 L150 363.39 L150 190.19 L300 103.58 L450 190.19 L450 363.39 Z" fill="#10B981" fillOpacity="0.1"/>
                    <path d="M300 450 L150 363.39 L150 190.19 L300 103.58 L450 190.19 L450 363.39 Z" stroke="#10B981" strokeWidth="3" strokeLinejoin="round"/>
                    <path d="M150 190.19 L300 276.8 L450 190.19" stroke="#10B981" strokeWidth="3" strokeLinejoin="round"/>
                    <path d="M300 276.8 L300 450" stroke="#10B981" strokeWidth="3" strokeLinejoin="round"/>

                            <path d="M 50 500 C 150 500, 150 350, 250 300 S 350 100, 550 50" stroke="#242424" strokeWidth="4" strokeDasharray="10 10" fill="none"/>
                    
                    <path d="M400 100 C500 100 520 200 520 200 C520 200 450 250 400 250 C350 250 330 150 330 150 C330 150 300 100 400 100 Z" fill="#10B981"/>
                    
                    <g fill="#242424">
                        <path d="M 100 150 L 105 165 L 120 170 L 105 175 L 100 190 L 95 175 L 80 170 L 95 165 Z" />
                        <path d="M 520 380 L 523 390 L 533 393 L 523 396 L 520 406 L 517 396 L 507 393 L 517 390 Z" transform="scale(0.7) translate(150, 100)"/>
                        <path d="M 220 80 L 222 85 L 227 87 L 222 89 L 220 94 L 218 89 L 213 87 L 218 85 Z" transform="scale(1.2) translate(-50, 0)"/>
                        <path d="M 450 480 L 454 492 L 466 496 L 454 500 L 450 512 L 446 500 L 434 496 L 446 492 Z" transform="scale(0.8) translate(50, -50)"/>
                    </g>
                    
                    <circle cx="250" cy="300" r="8" fill="#242424"/>
                    <circle cx="550" cy="50" r="10" fill="#10B981"/>
                    
                    <rect x="180" y="380" width="30" height="40" fill="#10B981" />
                    <rect x="230" y="340" width="30" height="80" fill="#10B981" />
                    <rect x="280" y="270" width="30" height="150" fill="#10B981" />
                </svg>
            </div>
            
            <div className="absolute bottom-0 right-0 opacity-20 lg:hidden pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="100" fill="#10B981"/>
                 </svg>
            </div>
        </div>
    </main>
    <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        mode={mode}
        onModeChange={onModeChange}
    />
		</>
	)
}

export default MainContent;
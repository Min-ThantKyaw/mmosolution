import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const Landing = () => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

	return (
		<>
			<Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />
			<MainContent
				isAuthModalOpen={isAuthModalOpen}
				onCloseAuthModal={() => setIsAuthModalOpen(false)}
			/>
			<Footer />
		</>
	)
}

export default Landing;
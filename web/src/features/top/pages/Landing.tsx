import { useState } from 'react';
import AuthModal from '../../auth/components/AuthModal';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

type AuthForm = 'login' | 'register';

const Landing = () => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
	const [activeAuthForm, setActiveAuthForm] = useState<AuthForm>('login');

	const openLogin = () => {
		setActiveAuthForm('login');
		setIsAuthModalOpen(true);
	};
	const openRegister = () => {
		setActiveAuthForm('register');
		setIsAuthModalOpen(true);
	};

	const closeModal = () => {
		setIsAuthModalOpen(false);
	};
	return (
		<>
			<Navbar
				onLogin={openLogin}
				onRegister={openRegister}
			/>
			<MainContent
				isOpen={isAuthModalOpen}
				onClose={closeModal}
				mode={activeAuthForm}
				onModeChange={setActiveAuthForm}
			/>
			<Footer />
		</>
	)
}

export default Landing;
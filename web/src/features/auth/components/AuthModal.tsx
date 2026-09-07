import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = 'login' | 'register';
type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
    mode: AuthMode;
    onModeChange: (mode: AuthMode) => void;
};

const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
    if(!isOpen) return null;
    return (
        <>
            <div
                id="loginModal"
                onClick={onClose}
                className={`fixed inset-0 bg-brand-bg/80 backdrop-blur-sm z-[100] ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center p-4`}
            >

                <div
                    onClick={(e) => e.stopPropagation()}

                    className="w-full max-w-md bg-white border border-brand p-8 md:p-10 shadow-2xl relative animate-fade-in">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-5 text-4xl font-light text-brand-text/40 hover:text-brand-text leading-none transition-colors"
                    >
                        &times;
                    </button>

                    <h1 className="font-serif text-3xl font-bold mb-2 text-center">{mode === 'login' ? 'Welcome back.' : 'Create an account.'}</h1>
                    <p className="text-center text-brand-text/70 mb-8 font-sans">
                        {mode === 'login'
                            ? 'Sign in to access your SellerHub account.'
                            : 'Join us to get started with your SellerHub journey.'}
                    </p>
                    {mode == 'login' &&
                        < LoginForm
                            isOpen={isOpen}
                            mode={mode}
                            onClose={onClose}
                            onModeChange={onModeChange}
                        />

                    }
                    {mode == 'register' &&
                        <RegisterForm
                            isOpen={isOpen}
                            mode={mode}
                            onClose={onClose}
                            onModeChange={onModeChange}
                        />
                    }
                </div>
            </div>

        </>
    );
}

export default AuthModal;
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
            {mode == 'login' &&
                < LoginForm
                    isOpen={isOpen}
                    mode={mode}
                    onClose={onClose}
                    onModeChange={onModeChange}
                />

            }:
            {mode == 'register' &&
                <RegisterForm
                isOpen={isOpen}
                mode={mode}
                onClose={onClose}
                onModeChange={onModeChange}
                />
            }

        </>
    );
}

export default AuthModal;
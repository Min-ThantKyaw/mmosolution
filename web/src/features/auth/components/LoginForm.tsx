type AuthMode = "login" | "register";
interface LoginFormProps {
    isOpen: boolean;
    mode: "login" | "signup";
    onClose: () => void;
    onModeChange: (mode: AuthMode) => void;
}
const LoginForm = ({ onModeChange }: LoginFormProps) => {
    return (
        <>
            <form action="#" method="POST" className="space-y-3">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 bg-brand-bg border border-brand rounded-none text-brand-text font-sans focus-ring transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="••••••••"
                        className="w-full px-4 py-2 bg-brand-bg border border-brand rounded-none text-brand-text font-sans focus-ring transition-colors"
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-brand-green border-brand rounded-none focus:ring-brand-green accent-brand-green"
                        />
                        <span className="text-brand-text/80">Remember me</span>
                    </label>
                    <a href="#" className="font-medium text-brand-green hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-brand-text text-white py-3 font-medium hover:bg-black transition-colors rounded-full mt-2"
                >
                    Sign in
                </button>
            </form>

            <div className="my-3 flex items-center">
                <div className="flex-grow border-t border-brand/20"></div>
                <span className="px-3 text-sm text-brand-text/50 font-sans">OR</span>
                <div className="flex-grow border-t border-brand/20"></div>
            </div>
            <p className="text-center text-sm text-brand-text/80 my-3 mb font-sans">
                Don't have an account?
                <button
                    onClick={() => onModeChange("register")}
                    className="font-semibold text-brand-text hover:text-brand-green transition-colors"
                >
                    Create one
                </button>
            </p>
        </>
    );
};

export default LoginForm;

type AuthMode = 'login' | 'register';
interface LoginFormProps {
    isOpen: boolean;
    mode: 'login' | 'signup';
    onClose: () => void;
    onModeChange: (mode: AuthMode) => void;
}
const LoginForm = ({ isOpen, onClose, onModeChange }: LoginFormProps) => {

    return (
        <>


                    <form action="#" method="POST" className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium mb-1">Email address</label>
                            <input type="email" id="email" name="email" required placeholder="you@example.com"
                                className="w-full px-4 py-2 bg-brand-bg border border-brand rounded-none text-brand-text font-sans focus-ring transition-colors" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input type="password" id="password" name="password" required placeholder="••••••••"
                                className="w-full px-4 py-2 bg-brand-bg border border-brand rounded-none text-brand-text font-sans focus-ring transition-colors" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-brand-green border-brand rounded-none focus:ring-brand-green accent-brand-green" />
                                <span className="text-brand-text/80">Remember me</span>
                            </label>
                            <a href="#" className="font-medium text-brand-green hover:underline">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full bg-brand-text text-white py-3 font-medium hover:bg-black transition-colors rounded-full mt-2">
                            Sign in
                        </button>
                    </form>

                    <div className="my-6 flex items-center">
                        <div className="flex-grow border-t border-brand/20"></div>
                        <span className="px-3 text-sm text-brand-text/50 font-sans">OR</span>
                        <div className="flex-grow border-t border-brand/20"></div>
                    </div>

                    <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-brand py-3 font-medium hover:bg-brand-bg transition-colors rounded-full">
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                            </g>
                        </svg>
                        Sign in with Google
                    </button>

                    <p className="text-center text-sm text-brand-text/80 mt-8 font-sans">
                        Don't have an account?
                        <button onClick={() => onModeChange('register')} className="font-semibold text-brand-text hover:text-brand-green transition-colors">Create one</button>
                    </p>
        </>
    )
}

export default LoginForm;

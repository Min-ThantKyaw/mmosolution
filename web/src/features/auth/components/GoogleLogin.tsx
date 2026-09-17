function GoogleLogin() {
	return (
		<>
			<button
				type="button"
				className="w-full flex items-center justify-center gap-2 bg-white border border-brand py-3 font-medium hover:bg-brand-bg transition-colors rounded-full cursor-pointer"
			>
				<img src="google.svg" alt="Google Icon" className="w-5 h-5" />
				Sign in with Google
			</button>
		</>
	)
}

export default GoogleLogin;
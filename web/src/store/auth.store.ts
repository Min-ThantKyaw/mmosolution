export interface User {
	id: number;
    name: string;
    username: string;
    email: string;
    role: string;
}

export interface AuthState {
	user: User | null;
	accessToken: string | null;
}

export const authStore = {
	user: null,
	accessToken: null,
};
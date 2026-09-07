export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	role: string;
	accessToken: string;
}

export type LoginResponse = User;
export type RegisterResponse = User;
export type RefreshResponse = Pick<User, 'accessToken'>;

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	username: string;
	email: string;
	password: string;
}
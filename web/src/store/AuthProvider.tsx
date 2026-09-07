import { createContext, useContext, useState } from "react";
// import axios from "axios";

interface User {
	id: number;
    name: string;
    username: string;
    email: string;
    role: string;
    accessToken: string;
}

interface AuthContextType { 
    user: User | null;
    token: string | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    login: (username: string, password: string) => Promise<void>;
}
const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    
    const login = async (username: string, password: string): Promise<void> => {
        try {
            // const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
            // const { accessToken, ...userData } = response.data;
            // setUser(userData);
            // setToken(accessToken);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, setUser, setToken, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

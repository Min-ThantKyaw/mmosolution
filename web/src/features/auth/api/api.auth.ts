import apiClient from "../../../lib/axios";

export const registerUser = async (userData: { name?: string; username: string; email: string; password: string }) => {
  try {
	const response = await apiClient.post("/auth/register", userData);
	return response.data;
  } catch (error) {
	console.error("Error registering user:", error);
	throw error;
  }
};
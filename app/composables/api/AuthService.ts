import BaseAPIService from "./BaseAPIService";
import APIError from "./APIError";

class AuthService extends BaseAPIService {
    async register(data: object) {
        try {
            return await this.request("/api/register", "POST", data);
        } catch (error: any) {
            if (error instanceof APIError) {
                throw error;
            }
            throw new APIError({ message: "Registration failed" });
        }
    }

    async login(data: object) {
        try {
            return await this.request("/api/login", "POST", data);
        } catch (error: any) {
            if (error instanceof APIError) {
                throw error;
            }
            throw new APIError({ message: "Login failed" });
        }
    }

    async logout() {
        try {
            return await this.request("/api/logout", "POST");
        } catch (error: any) {
            if (error instanceof APIError) {
                throw error;
            }
        }
    }

    async me() {
        try {
            return await this.request("/api/me", "GET");
        } catch (error: any) {
            if (error instanceof APIError) {
                throw error;
            }
        }
    }
}

export default new AuthService();

import APIError from "./APIError";
import { useRuntimeConfig, navigateTo } from "nuxt/app";

class BaseAPIService {
    async request(url: string, method: string, params: any = {}) {
        const runtimeConfig = useRuntimeConfig();
        let config: any = null;

        const token = import.meta.client ? localStorage.getItem("_token") : null;
        const headers: any = {
            Accept: "application/json",
        };
        if (token) {
            headers["Authorization"] = "Bearer " + token;
        }

        if (method === "GET") {
            config = {
                baseURL: runtimeConfig.public.apiBaseURL,
                method,
                headers,
                params,
            };
        } else {
            config = {
                baseURL: runtimeConfig.public.apiBaseURL,
                method,
                headers,
                body: params,
            };
        }

        try {
            return await $fetch(url, config);
        } catch (error: any) {
            const status = error?.response?.status;
            const data = error?.response?._data;

            switch (status) {
                case 400:
                case 404:
                case 422:
                case 429:
                    throw new APIError(data);

                case 401:
                    this.revokeAccess();
                    throw new APIError(data);

                case 500:
                    throw new APIError({
                        message: "Server error. Please try again. If the problem persists, contact your system administrator",
                    });

                default:
                    throw new APIError({
                        message: "Something went wrong. Please try again. If the problem persists, contact your system administrator",
                    });
            }
        }
    }

    revokeAccess() {
        if (import.meta.client) {
            localStorage.removeItem("_token");
            localStorage.removeItem("_user");
            navigateTo("/login");
        }
    }
}

export default BaseAPIService;

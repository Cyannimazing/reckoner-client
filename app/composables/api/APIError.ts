class APIError extends Error {
    errors?: any;

    constructor(error: any) {
        super(error && error.message ? error.message : String(error));

        if (error && error.errors) {
            this.errors = error.errors;
        }
    }

    getErrorMessage() {
        return "Something went wrong: " + this.message;
    }
}

export default APIError;

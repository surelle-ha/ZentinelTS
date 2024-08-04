import { Express } from 'express';

module.exports = function (app: Express) {
	
	class NotFoundError extends Error {
		success: boolean;
		statusCode: number;
		constructor(message: string) {
			super(message);
			(this.success = false), (this.name = "NotFoundError");
			this.statusCode = 404;
		}
	}

	class ValidationError extends Error {
		success: boolean;
		statusCode: number;
		constructor(message: string) {
			if (typeof message === "object") {
				message = JSON.stringify(message, null, 2);
			} else if (Array.isArray(message)) {
				message = message.join(", ");
			}

			super(message);
			this.success = false;
			this.name = "ValidationError";
			this.statusCode = 400;
		}
	}

	const Exception = {
		name: "Common",
		NotFoundError,
		ValidationError,
	};

	return Exception;
};

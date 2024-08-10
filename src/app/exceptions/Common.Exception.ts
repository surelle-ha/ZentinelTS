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
		constructor(message: object) {
			super(JSON.stringify(message, null, 2));
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

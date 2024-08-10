import { Express, Request, Response, NextFunction } from 'express';
const { body, validationResult } = require("express-validator");

interface Validation {
    name: string;
    check?: object;
}

module.exports = function (app: Express): Validation {
    const { ValidationError } = app.z.exceptions.Common;
	const Validation: Validation = {
		name: "Auth",
	};

	const loginRules = [
		body("email")
			.isEmail()
			.withMessage("Invalid email address")
			.normalizeEmail(),
		body("password")
			.exists()
			.withMessage("Password is required")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long"),
	];
    
    const registerRules = [
        body("first_name")
            .exists()
            .withMessage("First Name is required")
			.isLength({ min: 2 })
			.withMessage("First Name must be at least 2 characters long"),
        body("middle_name")
            .exists()
            .withMessage("Middle Name is required")
			.isLength({ min: 2 })
			.withMessage("Middle Name must be at least 2 characters long"),
        body("last_name")
            .exists()
            .withMessage("Last Name is required")
			.isLength({ min: 2 })
			.withMessage("Last Name must be at least 2 characters long"),
        body("email")
            .isEmail()
            .withMessage("Invalid email address")
            .normalizeEmail(),
        body("password")
            .exists()
            .withMessage("Password is required")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long")
    ];

    const handleErrors = (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ValidationError(errors.array());
        }
        next();
    };
    
    Validation.check = {
        login: [
            loginRules,
            handleErrors
        ],
        register: [
            registerRules,
            handleErrors
        ]
    };

	return Validation;
};

import multer, { StorageEngine, FileFilterCallback } from 'multer';
import { Express } from 'express';

module.exports = function setupStorage(app: Express): void {
	const { env } = app.z;
    const storage: StorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, env.file.upload_destination);
        },
        filename: (req, file, cb) => {
            const originalName = file.originalname;
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

            let filename: string;
            if (env.file.custom_name && env.file.name_format) {
                filename = env.file.name_format
                    .replace('{originalname}', originalName)
                    .replace('{uniqueid}', uniqueSuffix);
            } else {
                filename = originalName; 
            }
            cb(null, filename);
        },
    });

    const upload = multer({
        storage,
        limits: {
            fileSize: env.file.size_limit 
        },
        fileFilter: (req, file, cb: FileFilterCallback) => {
            const allowedTypes = env.file.allowed_file_types.split(',');
            if (allowedTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type'));
            }
        },
    });

    app.z.storage = upload;
}

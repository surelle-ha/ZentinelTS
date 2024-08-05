import multer, { StorageEngine, FileFilterCallback } from 'multer';
import { Express } from 'express';

require('dotenv').config();

export default function setupStorage(app: Express): void {
    const destinationPath = process.env.FILE_UPLOAD_DESTINATION || './server/storage/';
    const useCustomName = process.env.FILE_CUSTOM_NAME === 'true'; 

    const storage: StorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destinationPath);
        },
        filename: (req, file, cb) => {
            const originalName = file.originalname;
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

            let filename: string;
            if (useCustomName && process.env.FILE_NAME_FORMAT) {
                filename = process.env.FILE_NAME_FORMAT
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
            fileSize: parseInt(process.env.FILE_SIZE_LIMIT || '10000000', 10) 
        },
        fileFilter: (req, file, cb: FileFilterCallback) => {
            const allowedTypes = (process.env.FILE_ALLOWED_FILE_TYPES || 'image/jpeg,image/png').split(',');
            if (allowedTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type'));
            }
        },
    });

    app.z.storage = upload;
}

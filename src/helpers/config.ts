import { diskStorage } from "multer";

export const storageConfig = (floder: string) => diskStorage({
    destination: `upload/${floder}`,
    filename: (req, file, cb) => {
        cb(null, (Date.now()) + '-' + file.originalname);
    },
})
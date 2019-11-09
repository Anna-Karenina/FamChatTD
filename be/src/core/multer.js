import GridFsStorage from "multer-gridfs-storage";
import crypto from "crypto";
import multer from "multer";

const storage = new GridFsStorage({
  url:'mongodb+srv://annakarenina:9516623438@cluster0-8qzna.azure.mongodb.net/',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});



export default const uploader = multer({ storage });

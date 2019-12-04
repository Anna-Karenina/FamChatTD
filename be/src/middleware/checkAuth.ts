import  express from 'express'
import { verifyJWTToken } from "../libz";



export default (req: any, res: express.Response, next: express.NextFunction) => {
  if (req.path === "/user/login" ||
      req.path === "/user/registration"  ||
      req.path === "/user/verify" ) {
    return next();
  }

  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user.data._doc;
      next();
    })
    .catch(_err => {
      res.status(403).json({ message: "token problem." });
    });
};

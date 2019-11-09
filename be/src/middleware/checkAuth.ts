import { verifyJWTToken } from "../libz";

export default (req: any, res: any, next: any) => {
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
      res.status(403).json({ message: "Invalid auth token provided." });
    });
};

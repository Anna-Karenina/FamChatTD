import { check } from "express-validator";
export default [
  check("email").isEmail(),
  check("name").isLength({ min: 3 }),
  check("password").isLength({ min: 3 })
];

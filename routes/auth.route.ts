import { Router, Request, Response } from "express";

export const auth = Router();

auth.get("/test", (req: Request, res: Response): void => {
  res.send({ message: "testing /auth/test" });
});

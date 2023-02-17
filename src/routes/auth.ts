import { Router, Request, Response } from "express";

const router = Router();

// @route POST /auth
// @desc  Authenticate User
// @access Public
router.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
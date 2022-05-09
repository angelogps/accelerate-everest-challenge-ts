import { Router } from 'express';

const router = Router();

const UserController = require("./controllers/UserController");

router.get("/", UserController.handle);

export router;


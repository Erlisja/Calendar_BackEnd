import express from "express";
const router = express.Router();
import entryController from "../controllers/todo.mjs";

// seed route
// !!!! to be taken out before deployment
router.get("/seed", entryController.seed);

// index Router
// **** get    /braindump
// **** returns all entries
// NOTE: if the number of entries gets too large, this can bwe updated to limit the number returned
router.get("/", entryController.getEntries);

// TODO: post new entry
// TODO: get indiviual entry
// TODO: get based on timeframe
// TODO: edit
// TODO: delete

export default router;
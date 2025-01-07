import express from 'express';
const router = express.Router();
import entryController from '../controllers/entry.mjs';

//seed route
// !!!!! to be taken out in deployment

router.get('/seed', entryController.seed);

// Index route 
// ****      /braindump/ 
// ****      returns all entries
// NOTE: if the nr of entries is too large, this will need to limit the number of entries returned

router.get('/', entryController.getEntries);

// TODO: post new entry
// TODO: get individual entry
// TODO: get based on criteria
// TODO: update entry
// TODO: delete entry

export default router

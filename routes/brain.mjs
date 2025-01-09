import express from 'express';
const router = express.Router();
import Brain  from '../models/brain.mjs';
import entryController from '../controllers/brain.mjs';


//seed route
// !!!!! to be taken out in deployment
router.get('/seed', entryController.seed);

// TODO: get individual entry
// TODO: get based on criteria
// Index route 
// ****      api/braindump/ 
// ****      returns all entries
// NOTE: if the nr of entries is too large, this will need to limit the number of entries returned

router.get('/', entryController.getEntries);

// TODO: post new entry
// create route
// *** post /api/braindump
router.post('/', entryController.addEntry);///
// TODO: delete entry
// delete route
// *** delete /api/braindump/:id
router.delete('/:id', entryController.deleteEntry);


export default router
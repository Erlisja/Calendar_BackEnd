import Brain from '../models/brain.mjs';

async function seed (req, res) {
    const TODAY = new Date();



    try{
        await Brain.create(
            [
                {
                   entryDate: TODAY,
                     entryType: 'Todo',
                        description: 'Get this done'
                },
                {
                    entryDate: TODAY,
                      entryType: 'Sched',
                         description: 'Read the book'
                 },
                 {
                    entryDate: TODAY,
                      entryType: 'Idea',
                         description: 'Add a new feature'
                 },
                 {
                    entryDate: TODAY,
                      entryType: 'List',
                         description: 'Grocery list'
                 }
            ]
        )
        res.send('success').status(200);
        

    }catch(err){
        console.log(err);
        res.status(500).send
    }
}


const getEntries = async (req, res) => {
    try{
        const foundEntries = await Brain.find({});
        res.status(200).json(foundEntries); 


    }catch(err){
        
        res.status(400).status(400)
    }
}

const addEntry = async (req, res) => {
    console.log(req.body);
    try {
        const newEntry = await Brain.create(req.body);
        res.status(200).json(newEntry);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteEntry = async (req, res) => {
    console.log('delete entry');
    console.log(req.params.id);
    try {
        const deletedEntry = await Brain.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEntry);
    } catch (error) {
        res.status(400).json(error);
    }
}

const editEntry = async (req, res) => {
    console.log('edit entry');
    console.log(req.params.id);
    try {
        const editedEntry = await Brain.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(editedEntry);

    }
    catch (error) {
        res.status(400).json(error);
    }
}


export default {seed, getEntries, addEntry, deleteEntry, editEntry};
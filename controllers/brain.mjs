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

export default {seed, getEntries} 
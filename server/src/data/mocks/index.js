const { getRecentJobs, addJob, updateJob } = require('../jobs/index');
const database = require('../database');
const { executeCollectionQuery } = require('../utils');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const { getJobs, getRandomItem } = require('./data');

executeCollectionQuery(database.collection('users'))
    .then(users => {
        const { id } = getRandomItem(users);
        
        getJobs()
            .map(({ user, ...id, ...other }) => ({ ...other, userId: id }))
            .forEach(addJob);
    });

// getRecentJobs({ limit: 100 })
//     .then(jobs => {
//         jobs.forEach(job => {
//             console.log(job.id);

//             const dueDate = job.dueDate instanceof Date ? job.dueDate : new Date(job.dueDate);

//             updateJob({...job, dueDate }).then(console.log)
//         })
//     });
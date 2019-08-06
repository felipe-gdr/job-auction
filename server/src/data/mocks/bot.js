const database = require('../database');
const { getRecentJobs } = require('../jobs');
const { getUsers } = require('../users');
const { executeCollectionQuery } = require('../utils');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const { getJobs, getRandomItem } = require('./data');

export const ADD_BID_MUTATION = gql`
  mutation AddBid(
      $userId: ID!
      $jobId: ID!
      $price: Float!
      $comment: String
  ) {
    addBid(
        jobId: $jobId
        userId: $userId
        price: $price
        comment: $comment
    ) {
        id
    }
  }
`;

const addBid = ({ jobId, userId }) => {

}

const execute = async () => {
    const users = await executeCollectionQuery(database.collection('users'));
    const jobs = await executeCollectionQuery(database.collection('jobs'));




}

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
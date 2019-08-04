const database = require('../database');
const { executeCollectionQuery } = require('../utils');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const jobCollection = require('../jobs').collection;

const JOB_COLLECTION = 'jobs';
const COLLECTION = 'bids';

const addBid = (bidData) => {
    const createdDate = new Date();

    const { jobId, ...otherData } = bidData;

    return database
        .collection(jobCollection)
        .doc(jobId)
        .collection(COLLECTION)
        .add({
            ...otherData,
            createdDate
        })
        .then(docRef => {
            return {
                ...otherData,
                id: docRef.id,
                createdDate
            }
        });
}

getBids = ({ jobId }) => executeCollectionQuery(
    database.collection(jobCollection)
        .doc(jobId)
        .collection(COLLECTION)
        .orderBy('createdDate', 'desc')
);

module.exports = {
    addBid,
    getBids,
}
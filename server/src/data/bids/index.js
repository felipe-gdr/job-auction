const database = require('../database');
const { executeCollectionQuery } = require('../utils');

const jobCollection = require('../jobs').collection;

const COLLECTION = 'bids';

const addBid = async (bidData) => {
    const createdDate = new Date();

    const { jobId, ...otherData } = bidData;

    const jobRef = database.collection(jobCollection).doc(jobId);
    const bidRef = jobRef.collection(COLLECTION).doc();

    await database.runTransaction(async transaction => {
        const job = await jobRef.get();

        transaction.update(jobRef, 'bidCount', (job.data().bidCount || 0) + 1);
        transaction.set(bidRef, {
            ...otherData,
            createdDate
        });

    });

    return ({
        ...otherData,
        id: bidRef.id,
        createdDate
    });
}

getBids = ({ jobId }) => executeCollectionQuery(
    database.collection(jobCollection)
        .doc(jobId)
        .collection(COLLECTION)
        .orderBy('createdDate', 'desc')
).then(bids => bids.map(bid => ({ ...bid, jobId })));

module.exports = {
    addBid,
    getBids,
}
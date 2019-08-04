const database = require('../database');
const { toGraphQLObj, applyStartAfterAndExecute } = require('../utils');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const COLLECTION = 'jobs';
const DEFAULT_LIMIT = 10;

const getRecentJobs = ({
    limit = DEFAULT_LIMIT,
    startAfter
} = {}) => {
    const ref = database.collection(COLLECTION)
        .limit(limit)
        .orderBy('createdDate', 'desc');

    return applyStartAfterAndExecute(COLLECTION, startAfter, ref);
}

const getJobsByUser = ({
    userId,
    limit = DEFAULT_LIMIT,
    startAfter
} = {}) => {
    if (!userId) {
        return [];
    }

    const ref = database.collection(COLLECTION)
        .limit(limit)
        .where('userId', '==', userId);

    return applyStartAfterAndExecute(COLLECTION, startAfter, ref);
}

const getJobsByTag = ({
    tag,
    limit = DEFAULT_LIMIT,
    startAfter
} = {}) => {
    if (!tag) {
        return [];
    }

    const ref = database.collection(COLLECTION)
        .limit(limit)
        .where('tags', 'array-contains', tag);

    return applyStartAfterAndExecute(COLLECTION, startAfter, ref);
}

const addJob = (jobData) => {
    const createdDate = new Date();
    return database.collection(COLLECTION)
        .add({
            ...jobData,
            createdDate
        })
        .then(docRef => {
            return {
                ...jobData,
                id: docRef.id,
                createdDate
            }
        });
}

const updateJob = (jobData) => {
    const { id, ...otherData } = jobData;

    return database.collection(COLLECTION).doc(id)
        .update({...otherData })
        .then(() => jobData);
}

const getJob = ({
    id,
} = {}) => {
    if (!id) {
        return {};
    }

    return database.collection(COLLECTION).doc(id).get().then(toGraphQLObj);
}

module.exports = {
    collection: COLLECTION,
    getRecentJobs,
    getJobsByUser,
    getJobsByTag,
    addJob,
    updateJob,
    getJob
}
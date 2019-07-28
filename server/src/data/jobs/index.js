const database = require('../database');
const { toGraphQLObj, applyStartAfterAndExecute } = require('../utils');

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

module.exports = {
    getRecentJobs,
    getJobsByUser,
    getJobsByTag,
    addJob
}
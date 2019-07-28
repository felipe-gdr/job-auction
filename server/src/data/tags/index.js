const database = require('../database');
const { executeCollectionQuery } = require('../utils');

const COLLECTION = 'tags';

const getTags = ({ query = ''}) => {
    const ref = database
        .collection(COLLECTION)
        .where('title', '>=', query.toLowerCase());

    return executeCollectionQuery(ref);
}

module.exports = {
    getTags,
}
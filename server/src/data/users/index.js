const database = require('../database');
const { toGraphQLObj } = require('../utils');

const COLLECTION = 'users';

const getUser = ({
    id,
    username,
} = {}) => {
    if (!username && !id) {
        return [];
    }

    if (username && id) {
        throw new Error('Pass only one of "username" or "id"');
    }

    const ref = database.collection(COLLECTION)

    if (username) {
        return ref.where('username', '==', username).get().then(querySnapshot =>
            toGraphQLObj(querySnapshot.docs[0])
        )
    } else {
        return ref.doc(id).get().then(toGraphQLObj);
    }
}

const addUser = userData => {
    return database.collection(COLLECTION)
        .add(userData)
        .then(docRef => {
            return {
                ...userData,
                id: docRef.id,
            }
        });
}

module.exports = {
    getUser,
    addUser,
}
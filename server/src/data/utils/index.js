const database = require('../database');

const toGraphQLObj = firebaseDocument => ({
    id: firebaseDocument.id,
    ...firebaseDocument.data()
})

const executeCollectionQuery = ref =>
    ref.get()
        .then(querySnapshot => {
            const documents = [];

            querySnapshot.forEach(doc => {
                documents.push({
                    ...doc.data(),
                    id: doc.id,
                });
            });

            return documents;
        });

const applyStartAfter = async (collection, startAfter, ref) => {
    if (!!startAfter) {
        const startAfterDoc = await database.collection(collection).doc(startAfter).get();
        return ref.startAfter(startAfterDoc);
    }

    return ref;
}

const applyStartAfterAndExecute = async (collection, startAfter, ref) => {
    const refWithStartAfter = await applyStartAfter(collection, startAfter, ref);
    return executeCollectionQuery(refWithStartAfter);
}

module.exports = {
    toGraphQLObj,
    executeCollectionQuery,
    applyStartAfterAndExecute,
}
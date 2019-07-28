const { addJob } = require('./index');
const database = require('../database');
const { executeCollectionQuery } = require('../utils');

const JOBS =
    [{ "title": "Multi-tiered fault-tolerant pricing structure", "description": "Multi-tiered encompassing local area network", "user": { "displayName": "Stinky Macon", "username": "smacon0" }, "createdDate": "6/25/2019", "dueDate": "5/22/2020", "id": "f9ad2dcd-4acb-429a-ad5e-8ce98ebd8100" },
    { "title": "Automated uniform database", "description": "Exclusive regional application", "user": { "displayName": "Skell Stenson", "username": "sstenson1" }, "createdDate": "3/4/2019", "dueDate": "7/10/2020", "id": "f952bcf8-4443-4232-bfc9-60014bfa9bf7" },
    { "title": "Balanced tangible throughput", "description": "Re-contextualized fresh-thinking product", "user": { "displayName": "Ulick Benois", "username": "ubenois2" }, "createdDate": "10/29/2018", "dueDate": "10/5/2019", "id": "ee3ea5bc-a6bc-4717-a1f1-4e4b1a07c00f" },
    { "title": "Right-sized fault-tolerant emulation", "description": "Multi-tiered coherent synergy", "user": { "displayName": "Tamarra Benedetti", "username": "tbenedetti3" }, "createdDate": "9/1/2018", "dueDate": "1/11/2020", "id": "7d4899f7-91d8-4f6f-8019-5a3f50f64366" },
    { "title": "Progressive incremental adapter", "description": "Reverse-engineered full-range pricing structure", "user": { "displayName": "Stanly Simonassi", "username": "ssimonassi4" }, "createdDate": "8/3/2018", "dueDate": "3/11/2020", "id": "fd7c8498-01e3-4a8a-a90b-2207e3ef6b62" },
    { "title": "Diverse optimal portal", "description": "Virtual homogeneous access", "user": { "displayName": "Janelle Ettridge", "username": "jettridge5" }, "createdDate": "12/1/2018", "dueDate": "7/17/2020", "id": "759ec426-4029-4a76-a7ca-a016c6d3cde0" },
    { "title": "Exclusive holistic complexity", "description": "Ameliorated bandwidth-monitored policy", "user": { "displayName": "Car Kinzel", "username": "ckinzel6" }, "createdDate": "11/19/2018", "dueDate": "11/7/2019", "id": "7f7c2df5-dd47-4e13-b0fa-9222ac909d27" },
    { "title": "Optional bottom-line hierarchy", "description": "Decentralized intangible parallelism", "user": { "displayName": "Sophi Argrave", "username": "sargrave7" }, "createdDate": "12/20/2018", "dueDate": "5/31/2020", "id": "42e41170-c635-4857-9caf-6ac05fd2e4e0" },
    { "title": "Configurable modular firmware", "description": "Stand-alone dedicated focus group", "user": { "displayName": "Erich Mathiot", "username": "emathiot8" }, "createdDate": "1/12/2019", "dueDate": "9/9/2019", "id": "c5ed18f2-2155-42dd-8bf1-2ef8669fd6ea" },
    { "title": "De-engineered secondary secured line", "description": "Cross-platform logistical structure", "user": { "displayName": "Christie Jerrand", "username": "cjerrand9" }, "createdDate": "6/12/2019", "dueDate": "4/12/2020", "id": "0aab6125-8a88-420e-a1f9-6fe1fa41934c" }]

const TAGS = ['ikea-assembly', 'cleaner', 'handyman', 'mechanic', 'plumber', 'dog-walking', 'baby-sitting'];

const IMG_CATEGORIES = ['tech', 'arch', 'people'];

const getImage = () => {
    const baseUrl = 'https://placeimg.com/640/480';

    return `${baseUrl}/${getRandomItem(IMG_CATEGORIES)}`;
}

const getTags = () => {
    const tagCount = getRandomInt(1, 3);

    const tags = [];

    for (let x = 0; x < tagCount; x++) {
        const tag = getRandomItem(TAGS);

        if (!tags.find(t => t === tag)) {
            tags.push(tag);
        }
    }

    return tags;
};

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = array => {
    const index = getRandomInt(0, array.length - 1);
    return array[index];
}

const getJobs = () => JOBS.map(({ id, dueDate, ...other }) => (
    {
        ...other,
        dueDate: new Date(dueDate),
        tags: getTags(),
        image: getImage()
    }));

const getJob = () => getRandomItem(getJobs());

executeCollectionQuery(database.collection('users'))
    .then(users => {
        const { id } = getRandomItem(users);
        
        getJobs()
            .map(({ user, ...other }) => ({ ...other, userId: id }))
            .forEach(addJob);
    });



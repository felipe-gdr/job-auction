const jobs = require('./jobs.json');
const tags = require('./tags.json');
const bids = require('./bids.json');

const IMG_CATEGORIES = ['tech', 'arch', 'people'];

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = array => {
    const index = getRandomInt(0, array.length - 1);
    return array[index];
}

const getImage = () => {
    const baseUrl = 'https://placeimg.com/640/480';

    return `${baseUrl}/${getRandomItem(IMG_CATEGORIES)}`;
}

const getSomeTags = count => {
    const someTags = [];

    for (let x = 0; x < count; x++) {
        const tag = getRandomItem(tags);

        if (!someTags.find(t => t === tag)) {
            someTags.push(tag);
        }
    }

    return someTags;
};

const transformDate = epoch => new Date(epoch * 1000);

const getJobs = () => jobs.slice(0, 10).map(job => ({
    ...job,
    tags: getSomeTags(getRandomInt(1, 3)),
    image: getImage(),
    createdDate: transformDate(job.createdDate),
    dueDate: transformDate(job.dueDate),
}));

const getJob = () => getRandomItem(getJobs());

const getTags = () => tags.map((tag, idx) => ({
    id: idx,
    title: tag,
}));

const getBids = () => bids.map(bid => ({ ...bid, createdDate: transformDate(bid.createdDate) }));

module.exports = {
    getJobs,
    getRandomItem,
};
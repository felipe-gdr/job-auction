import jobs from './data/jobs.json';
import bids from './data/bids.json';
import tags from './data/tags.json';

const IMG_CATEGORIES = ['tech', 'arch', 'people'];

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

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = array => {
    const index = getRandomInt(0, array.length - 1);
    return array[index];
}

const transformDate = epoch => epoch * 1000;

export const getJobs = () => jobs.slice(0, 10).map(job => ({
    ...job,
    tags: getSomeTags(getRandomInt(0, 3)),
    image: getImage(),
    createdDate: transformDate(job.createdDate),
    dueDate: transformDate(job.dueDate),
}));

export const getJob = () => getRandomItem(getJobs());

export const getTags = () => tags.map((tag, idx) => ({
    id: idx,
    title: tag,
}));

export const getBids = () => bids.map(bid => ({ ...bid, createdDate: transformDate(bid.createdDate) }));
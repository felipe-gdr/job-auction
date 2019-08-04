const { PubSub } = require('apollo-server');

const { 
    getRecentJobs, 
    getJobsByUser, 
    getJobsByTag, 
    addJob, 
    getJob,
} = require('./data/jobs');
const { addBid, getBids } = require('./data/bids');

const { getTags } = require('./data/tags');
const { getUser, getUsers } = require('./data/users');

// TODO: Use Firebase's mechanism for event consumption
const pubsub = new PubSub();

const JOB_ADDED = 'JOB_ADDED';
const BID_ADDED = 'BID_ADDED';

const resolvers = {
    Query: {
        jobsRecent: (root, args, context) => getRecentJobs(args),
        jobsByUser: (root, args, context) => getJobsByUser(args),
        jobsByTag: (root, args, context) => getJobsByTag(args),
        // Use dataLoader to fetch users
        user: (root, args, context) => getUser(args),
        users: (root, args, context) => getUsers(args),
        tags: (root, args, context) => getTags(args),
        job: (root, args, context) => getJob(args),
        watchList: (root, args, context) => [],
    },
    Job: {
        user: job => getUser({ id: job.userId }),
        bids: job => getBids({jobId: job.id}),
    },
    Bid: {
        user: bid => getUser({ id: bid.userId }),
    },
    Subscription: {
        jobAdded: {
            subscribe: () => pubsub.asyncIterator([JOB_ADDED])
        },
        bidAdded: {
            subscribe: () => pubsub.asyncIterator([BID_ADDED])
        }
    },
    Mutation: {
        addJob: (root, args, context) => {
            return addJob(args).then(job => {
                pubsub.publish(JOB_ADDED, { jobAdded: job });
                return job;
            });
        },
        addBid: (root, args, context) => {
            return addBid(args).then(bid => {
                pubsub.publish(BID_ADDED, { bidAdded: bid });
                return bid;
            });
        }
    },
};

module.exports = resolvers;
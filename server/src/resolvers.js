const { PubSub } = require('apollo-server');

const { getRecentJobs, getJobsByUser, getJobsByTag, addJob, getJob } = require('./data/jobs');
const { getTags } = require('./data/tags');
const { getUser } = require('./data/users');

// TODO: Use Firebase's mechanism for event consumption
const pubsub = new PubSub();

const JOB_ADDED = 'JOB_ADDED';

const resolvers = {
    Query: {
        jobsRecent: (root, args, context) => getRecentJobs(args),
        jobsByUser: (root, args, context) => getJobsByUser(args),
        jobsByTag: (root, args, context) => getJobsByTag(args),
        // Use dataLoader to fetch users
        user: (root, args, context) => getUser(args),
        tags: (root, args, context) => getTags(args),
        job: (root, args, context) => getJob(args)
    },
    Job: {
        user: job => getUser({ id: job.userId }),
    },
    Subscription: {
        jobAdded: {
            subscribe: () => pubsub.asyncIterator([JOB_ADDED])
        }
    },
    Mutation: {
        addJob: (root, args, context) => {
            return addJob(args).then(job => {
                pubsub.publish(JOB_ADDED, { jobAdded: job });
                return job;
            });
        },
    },
};

module.exports = resolvers;
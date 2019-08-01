import React, { useEffect } from 'react';

import useStyles from './styles';

import JobCard from './job-card';
import Loading from './loading';
import Error from './error';

export default ({ onLoadMore, subscribeToNewJobs, loading, error, data, tag }) => {
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        onLoadMore(data);
    };

    useEffect(subscribeToNewJobs, [tag, loading])

    useEffect(() => {
        if (loading) return;

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, handleScroll]);

    const classes = useStyles();

    if (loading) return <Loading />;
    if (error) return <Error />;

    return <div>
        {
            data.jobs.map(job => (
                <div key={job.id} className={classes.listItem}>
                    <JobCard job={job} />
                </div>
            ))
        }
    </div>
}

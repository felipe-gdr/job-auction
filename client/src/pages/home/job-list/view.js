import React, { useEffect } from 'react';
import BidNotification from '../../../components/bid-notification';

import useStyles from './styles';

import JobCard from './job-card';
import Loading from './loading';
import Error from './error';

export default ({ onLoadMore, loading, error, data, tag }) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            onLoadMore(data);
        };
        if (loading) return;

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);

    }, [loading, onLoadMore, data]);

    const classes = useStyles();

    if (loading && (!data || !data.jobs)) return <Loading />;
    if (error) return <Error />;

    return <div>
        {
            data.jobs.map(job => (
                <div key={job.id} className={classes.listItem}>
                    <JobCard job={job} />
                </div>
            ))
        }
        <BidNotification />
    </div>
}

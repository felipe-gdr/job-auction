import React, { useEffect } from 'react';

import JobCard from './job-card';
import { ListItem } from './styled';
import Loading from './loading';

export default ({ onLoadMore, subscribeToNewJobs, loading, error, data, tag, onClickJob }) => {
    useEffect(subscribeToNewJobs, [tag, loading])

    useEffect(() => {
        if (loading) return;

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, data]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        onLoadMore(data);
    };

    if (loading) return <Loading />
    if (error) return <p>Error :(</p>;

    return <div onScroll={() => handleScroll(onLoadMore)}>
        {
            data.jobs.map(job => (
                <ListItem key={job.id} >
                    <JobCard job={job} onClick={onClickJob} />
                </ListItem>
            ))
        }
        <button onClick={onLoadMore}>more</button>
    </div>
}

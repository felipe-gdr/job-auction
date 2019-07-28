import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';

import JobCard from './job-card';
import { ListItem } from './styled';
import Loading from './loading';

export default ({ onLoadMore, subscribeToNewJobs, loading, error, data, tag, onClickJob }) => {
    useEffect(subscribeToNewJobs, [tag])

    if (loading) return <Loading /> 
    if (error) return <p>Error :(</p>;

    return <div>
        {
            data.jobs.map(job => (
                <ListItem>
                    <JobCard key={job.id} job={job} onClick={onClickJob} />
                </ListItem>
            ))
        }
        <button onClick={onLoadMore}>More.</button>
    </div>
}

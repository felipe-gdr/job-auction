import React, { useEffect } from 'react';

export default ({ onLoadMore, subscribeToNewJobs, loading, error, data, tag }) => {
    useEffect(subscribeToNewJobs, [tag])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
        {
            data.jobs.map(({ id, title }) => (
                <div key={id}>
                    <p>{id}: {title}</p>
                </div>
            ))
        }
        <button onClick={onLoadMore}>More.</button>
    </div>
}

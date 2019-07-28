import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default ({ onLoadMore, subscribeToNewJobs, loading, error, data, tag }) => {
    useEffect(subscribeToNewJobs, [tag])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
        {
            data.jobs.map(({ id, title }) => (
                <Link to={`job/${id}`} key={id}>
                    <p>{id}: {title}</p>
                </Link>
            ))
        }
        <button onClick={onLoadMore}>More.</button>
    </div>
}

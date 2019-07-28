import React from 'react';

export default ({ job })=> (
    <div>
        <h4>{job.title}</h4>
        <p>{job.description}</p>
        <ul>
            {job.tags.map(tag => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
        <div>
            {job.user.displayName} [{job.user.username}]
        </div>
    </div>
)
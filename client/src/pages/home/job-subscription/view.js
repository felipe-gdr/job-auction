import React from 'react';

export default ({ jobs, onRemoveJob }) => 
    jobs.map(job => (
        <div key={job.id}>
            <h4>Job added: {job.title}</h4>
            <button onClick={() => onRemoveJob(job)}>clear</button>
        </div>
    ))
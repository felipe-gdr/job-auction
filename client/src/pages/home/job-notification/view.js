import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast'

import formatRelative from 'date-fns/formatRelative';

const JobNotification = ({ job, onClose }) => {
    const { title, description } = job;
    const [show, setShow] = useState(true);

    const hide = () => {
        setShow(false);
        onClose(job);
    };

    return (
        <Toast show={show} onClose={hide}>
            <Toast.Header>
                <strong className="mr-auto">{title}</strong>
                <small>{formatRelative(new Date(job.createdDate), new Date())}</small>
            </Toast.Header>
            <Toast.Body>{description}</Toast.Body>
        </Toast>
    );
}

export default ({ jobs, onRemoveJob }) => {
    return jobs.map(job => (
        <JobNotification key={job.id} job={job} onClose={onRemoveJob} />
    ))
}
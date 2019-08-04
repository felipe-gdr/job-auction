import React from 'react';

import { Provider as JobProvider } from '../../../contexts/job-context';

export const withJobProvider = initialValue => wrappedComponent => (
    <JobProvider initialValue={initialValue}>{wrappedComponent()}</JobProvider>
)
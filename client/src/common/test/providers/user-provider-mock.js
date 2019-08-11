import React from 'react';

import { Provider as UserProvider } from '../../../contexts/user-context';

export const withUserProvider = initialValue => wrappedComponent => (
  <UserProvider initialValue={initialValue}>{wrappedComponent()}</UserProvider>
);

import React from 'react';

import View from './view';

export const withErrorBoundary = WrappedComponent => props => (
    <View>
        <WrappedComponent {...props} />
    </View>
)

export default View;
import React from 'react';

import { AuthProvider } from './auth';
import { POProvider } from './poController';

const AppProvider: React.FC = ({ children }) => (
    <POProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </POProvider>
);

export default AppProvider;
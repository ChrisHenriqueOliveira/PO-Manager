import React, { createContext, useCallback, useState, useContext } from 'react';

// import api from '../services/api';

interface User {
    // id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User;
    token: string;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AuthState>((): AuthState => {
    const user = localStorage.getItem('@POManager:user');
    const token = localStorage.getItem('@POManager:token');

    if (user && token) {
      return {
        user: JSON.parse(user),
        token,
      };
    }

    setLoading(false);
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    // const response = await api.post('ws/connect', { login, password });

    setLoading(true);

    setTimeout(() => {
        const user: User = {
            name: 'Christian',
            email: 'useraw@dqw.com',
        }

        const token = 'tokeeen21323442342';

        localStorage.setItem('@POManager:user', JSON.stringify(user));
        localStorage.setItem('@POManager:token', token);
    
        console.log(user, token)

        setData({
            user: user,
            token,
        });

        setLoading(false);
    }, 3000)
  
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@POManager:user');
    localStorage.removeItem('@POManager:token');

    setLoading(false);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

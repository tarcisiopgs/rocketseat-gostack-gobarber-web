import React, { createContext } from 'react';

interface AuthContextState {
  name: string;
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({children}) => {
  return (
    <AuthContext.Provider value={{name: 'Teste'}}>
      {children}
    </AuthContext.Provider>
  )
}

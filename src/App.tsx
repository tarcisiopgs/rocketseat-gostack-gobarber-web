import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import {AuthProvider} from './contexts/AuthContext';

const App = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;

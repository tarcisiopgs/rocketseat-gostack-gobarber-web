import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import AuthContext from './contexts/AuthContext';

const App = () => (
  <>
    <AuthContext.Provider value={{ name: '' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;

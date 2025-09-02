import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
      <UserProfile name="Charlie" age={22} bio="Passionate about music and art" />
    </div>
  );
}

export default App;

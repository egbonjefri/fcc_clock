
import React from 'react';
import MyTimer from './myTimer'

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
     
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App;

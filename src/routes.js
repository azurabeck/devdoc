import React from 'react';
import Navbar from './components/navbar'
import { BtnTags } from './components/buttons'
import { LogoDfndr } from './components/logos'

function App() {
  return (
    <div className="App"> 
        <Navbar />
        <BtnTags text='teste'/>
        <LogoDfndr width='12px' />
    </div>
  );
}

export default App;

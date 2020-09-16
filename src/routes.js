import React from 'react';
import { BtnTags } from './components/buttons'
import { LogoDoc , LogoDfndr } from './components/logos'

function App() {
  return (
    <div className="App"> teste
        <BtnTags text='teste'/>
        <LogoDoc/>
        <LogoDfndr width='12px' />
    </div>
  );
}

export default App;

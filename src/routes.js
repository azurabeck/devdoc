import React from 'react';
import Navbar from './components/navbar'
import { LogoDfndr } from './components/logos'
import { BtnTags } from './components/buttons'


function App() {
  return (
    <div className="dev-document"> 
        <Navbar />
        <div className='content'>
            <div className='topic'>              
                <LogoDfndr width='11px' fontSize='13px'/>
                <div className='title'>Global Components</div>
            </div>
            <div className='topic-desc'>
                <div className='desc'>
                      Non ex cupidatat nulla qui ullamco. Aute eu quis mollit consequat nisi 
                      consectetur excepteur consectetur do cupidatat. Exercitation 
                      consectetur commodo qui consectetur in tempor excepteur enim officia 
                      cillum do. Eiusmod labore proident magna in proident incididunt. 
                      Voluptate culpa laborum id veniam officia sunt sunt pariatur enim 
                      eiusmod. Sunt voluptate labore 
                </div>
            </div>
            <div className='sub-item-tag-area'>
                <BtnTags text='buttons'/>
                <BtnTags text='compartiments'/>
                <BtnTags text='logos'/>
                <BtnTags text='loader'/>
                <BtnTags text='tables'/>
            </div>
        </div>
    </div>
  );
}

export default App;

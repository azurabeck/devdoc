import React from 'react';

export const LogoDoc = ({ onClick , text }) => (
    <div className='logo-doc'> <span className='bold'>dev </span> document </div>
)

export const LogoDfndr = ({ onClick , width , fontSize }) => (
    <div className='logo-dfndr' style={{fontSize: fontSize}}>                
        <img style={{width: width}} src='https://static.enterprise.psafe.com/images/enterprise/dfndr-icon.svg' alt=''></img>
        <span className='bold'>dfndr </span> enterprise
    </div>
)

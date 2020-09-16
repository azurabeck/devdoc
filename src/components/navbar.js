import React, { PureComponent } from 'react';
import { LogoDoc } from './logos'
import MenuIcon from '@material-ui/icons/Menu'

class navbar extends PureComponent {
    render() {
        return (
            <div className='nav-bar'>
                <MenuIcon />
                <LogoDoc/>
            </div>
        );
    }
}

export default navbar;
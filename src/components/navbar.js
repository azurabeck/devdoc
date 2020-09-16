import React, { PureComponent } from 'react';
import { LogoDoc } from './logos'
import { Search , Menu } from '@material-ui/icons';

class navbar extends PureComponent {
    render() {
        return (
            <div className='navbar'>
                <Menu />
                <LogoDoc/>
                <Search />
            </div>
        );
    }
}

export default navbar;
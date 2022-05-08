import { Group, MediaQuery } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function DesktopMenu() {

  
  return (
    <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
      <Group direction='row'className='nav'>
        <NavLink className={ isActive => isActive ? 'active' : ''} to='/'>
          Home
        </NavLink>
        <NavLink className={ isActive => isActive ? 'active' : ''} to='/about'>
          About
        </NavLink>
        <NavLink className={ isActive => isActive ? 'active' : ''} to='/projects'>
          Projects
        </NavLink>
        <NavLink className={ isActive => isActive ? 'active' : ''} to='/resume'>
          Resume
        </NavLink>
        <NavLink className={ isActive => isActive ? 'active' : ''} to='/contact'>
          Contact
        </NavLink>
      </Group>
    </MediaQuery>
  );
}

export default DesktopMenu;
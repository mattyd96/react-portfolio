import { Menu, MenuItem, MediaQuery } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


function MobileMenu() {
  return (
    <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
      <Menu trigger='hover' className='nav'>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : 'notActive'} to='/'>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : 'notActive'} to='/about'>
            About
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : 'notActive'} to='/projects'>
            Projects
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : 'notActive'} to='/resume'>
            Resume
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : 'notActive'} to='/contact'>
            Contact
          </NavLink>
        </MenuItem>
      </Menu>
    </MediaQuery> 
  );
}

export default MobileMenu;
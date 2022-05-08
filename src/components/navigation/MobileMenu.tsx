import { Menu, MenuItem, MediaQuery } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


function MobileMenu() {
  return (
    <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
      <Menu trigger='hover' className='nav'>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/about'>
            About
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/projects'>
            Projects
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/resume'>
            Resume
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/contact'>
            Contact
          </NavLink>
        </MenuItem>
      </Menu>
    </MediaQuery> 
  );
}

export default MobileMenu;
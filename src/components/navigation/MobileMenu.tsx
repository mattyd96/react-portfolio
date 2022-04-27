import { Menu, MenuItem, MediaQuery } from '@mantine/core';


const MobileMenu = () => {
  return (
    <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
      <Menu>
        <MenuItem><a href="#about">About</a></MenuItem>
        <MenuItem><a href="#projects">Projects</a></MenuItem>
        <MenuItem><a href="#resume">Resume</a></MenuItem>
        <MenuItem><a href="#contact">Contact</a></MenuItem>
      </Menu>
    </MediaQuery>
    
  );
}

export default MobileMenu;
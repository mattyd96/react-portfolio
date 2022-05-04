import { Group, MediaQuery } from '@mantine/core';
import { NavLink } from 'react-router-dom';

function DesktopMenu() {
  return (
    <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
      <Group direction='row'>
        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? "blue" : ""
          }
        }}
        to='/'
        >
          Home
        </NavLink>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>
      </Group>
    </MediaQuery>
  );
}

export default DesktopMenu;
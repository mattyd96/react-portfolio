import { Group, MediaQuery } from '@mantine/core';
import React from 'react';

const DesktopMenu: React.FC = () => {
  return (
    <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
      <Group direction='row'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>
      </Group>
    </MediaQuery>
  );
}

export default DesktopMenu;
import { useState } from "react";
import { Header, MediaQuery, Menu, MenuItem, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';

import ThemeSwitch from "./buttons/ThemeSwitch";
import Links from "./navigation/Links";
import MobileMenu from "./navigation/MobileMenu";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const mobile = useMediaQuery('(max-width: 768px)');

  // theme
  const theme = useMantineTheme();

  // boolean for dark theme
  const dark = theme.colorScheme === 'dark';

  // colors for theme
  const black : string = theme.colors.dark[9];
  const white : string = theme.colors.gray[5];

  // mobile styling
  const desktopDis = mobile ? 'none' : 'flex';
  const mobileDis = mobile ? 'block' : 'none';

  return (
    <Header height="md" px='2rem' py='1rem' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text color={dark ? white : black}>Matthew Durflinger</Text>
      <section style={{display: 'flex', gap: '1rem'}}>
        <Links display={desktopDis}/>
        <MobileMenu />
        <ThemeSwitch />
      </section>
    </Header>
  );
}

export default Navbar;
import { Header, Text, useMantineTheme } from "@mantine/core";

import ThemeSwitch from "../buttons/ThemeSwitch";
import Links from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  // theme
  const theme = useMantineTheme();

  // boolean for dark theme
  const dark = theme.colorScheme === 'dark';

  // colors for theme
  const black : string = theme.colors.dark[9];
  const white : string = theme.colors.gray[5];

  return (
    <Header height="md" px='2rem' py='1rem' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text color={dark ? white : black}>Matthew Durflinger</Text>
      <section style={{display: 'flex', gap: '1rem'}}>
        <Links />
        <MobileMenu />
        <ThemeSwitch />
      </section>
    </Header>
  );
}

export default Navbar;
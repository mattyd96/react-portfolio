import { ActionIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';

const ThemeSwitch: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === 'dark';
  const darkColor : string = theme.colors.gray[5];
  const lightColor : string = theme.colors.dark[8];

  return (
    <ActionIcon
      variant="filled"
      color={dark ?  darkColor : lightColor}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <FiSun size={18} /> : <BsMoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeSwitch;
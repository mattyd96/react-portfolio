import { ActionIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';

function ThemeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="filled"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <FiSun size={18} /> : <BsMoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeSwitch;
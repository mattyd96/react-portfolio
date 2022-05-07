import { useMantineTheme } from '@mantine/core';

type Props = {
  children?: JSX.Element[]
}

function ThemeContainer({ children }: Props) {
  // theme
  const theme = useMantineTheme();

  // boolean for dark theme
  const dark = theme.colorScheme === 'dark';

  // colors for theme
  const black : string = theme.colors.dark[9];
  const white : string = theme.colors.gray[5];

  return(
    <section style={{backgroundColor: dark ? black: white}}>
      {children}
    </section>
  );

}

export default ThemeContainer;
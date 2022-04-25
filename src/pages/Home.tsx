import { AppShell } from '@mantine/core';

import MyNavbar from '../components/MyNavbar';

const Home = () => {
  return (
    <AppShell navbar={<MyNavbar />}>
    </AppShell>
  );
}

export default Home;
import { AppShell } from '@mantine/core';

import MyNavbar from '../components/Navbar';

const Home = () => {
  return (
    <AppShell header={<MyNavbar />}>
    </AppShell>
  );
}

export default Home;
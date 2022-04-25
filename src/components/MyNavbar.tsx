import { Navbar } from "@mantine/core";

const MyNavbar = () => {
  return (
    <Navbar width={{base: 100}}>
      <Navbar.Section>Matthew Durflinger</Navbar.Section>
      <Navbar.Section grow>
        <ul>
          <li>Home</li>
          <li>Projects</li>
        </ul>
      </Navbar.Section> 
    </Navbar>
  );
}

export default MyNavbar;
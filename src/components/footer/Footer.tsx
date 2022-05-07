import { ActionIcon, Footer as Foot, Group } from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

function Footer() {

  return(
    <Foot height={'3rem'} mt='2rem' style={{borderTop: 'none'}}>
      <Group align='center' position='center'>
        <ActionIcon component="a" href="https://github.com/mattyd96" target='_blank' size='xl' title="Gthub Link">
          <FaGithub size='2rem' />
        </ActionIcon>
        <ActionIcon component="a" href="https://www.linkedin.com/in/matthew-durflinger" target='_blank' size='xl' title="LinkedIn Link">
          <FaLinkedin size='2rem' />
        </ActionIcon>
        <ActionIcon component="a" href="mailto:matthewdcodes@gmail.com" target='_blank' size='xl' title="Email Link">
          <BiMailSend size='2rem' />
        </ActionIcon>
      </Group>
    </Foot>
  );
}

export default Footer;
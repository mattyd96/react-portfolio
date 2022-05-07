import { ActionIcon, Footer as Foot, Group } from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

function Footer() {

  return(
    <Foot height={'3rem'} mt='2rem'>
      <Group align='center' position='center'>
        <ActionIcon component="a" href="https://github.com/mattyd96" target='_blank'>
          <FaGithub />
        </ActionIcon>
        <ActionIcon component="a" href="https://www.linkedin.com/in/matthew-durflinger" target='_blank'>
          <FaLinkedin />
        </ActionIcon>
        <ActionIcon component="a" href="mailto:matthewdcodes@gmail.com" target='_blank'>
          <BiMailSend />
        </ActionIcon>
      </Group>
    </Foot>
  );
}

export default Footer;
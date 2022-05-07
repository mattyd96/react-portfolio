import { Text } from "@mantine/core";

function AboutSection() {
  return (
    <section>
      <h2>About Me</h2>
      <Text size="xl">
        Hello! I am a starting Web developer based in Adelaide, Australia. Having graduated from the University of Adelaide with a Bachelor of Computer Science (Artificial Intellegence), and I hope to apply these skills to this space. I have only scratched the surface of what you can do with web development, 
        but am eager to learn more and become proficient in the Full-stack. In future projects I am hoping to build some applications using web3 tools and technologies, so please look forward to them!
      </Text>
      <Text mt='1rem' size="xl">
        When I am not coding I love spending time with my dog Sabre, learning about block-chain technologies, travelling and Snowboarding. The last two have been difficult to do recently, so I have a very spoiled K9 at home.
        Thankyou for checking out my Portfolio, I hope you enjoy the projects I have completed so far!
      </Text>
    </section>
  );
}

export default AboutSection;
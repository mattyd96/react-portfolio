import { List, ListItem, Text, Grid, Title, Button, Group } from "@mantine/core";

function ResumeSection() {
  return (
    <section>
      <Group position="apart" align='center' mx='auto' my={'1rem'} styles={{maxWidth: '30rem'}}>
        <Title order={2}>Resume</Title>
        <Button component="a" href="https://docs.google.com/document/d/1U9uNR5Uw96ogn3mztNes73d-I1N01Sv23sBiSXWEXDo/edit?usp=sharing" target="_blank">View</Button>
      </Group>
      <Grid>
        <Grid.Col sm={3}>
          <Text>Languages</Text>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Solidity</ListItem>
          </List> 
        </Grid.Col>
        <Grid.Col sm={3}>
          <Text>Frameworks</Text>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Nextjs</ListItem>
            <ListItem>Nodejs</ListItem>
            <ListItem>Sequelize</ListItem>
            <ListItem>MongoDB</ListItem>
          </List> 
        </Grid.Col>
      </Grid>
    </section>
  );
}

export default ResumeSection;
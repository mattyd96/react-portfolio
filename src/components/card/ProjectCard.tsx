import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface Info {
  id: number; 
  image : string;
  title: string;
  year?: string;
  desc?: string;
  github: string;
  website?: string;
}

function ProjectCard(props:Info) {

  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image
          src={props.image}
          height={160}
          alt={props.title}
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>{props.title}</Text>
        <Badge color="pink" variant="light">
          {props.year}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {props.desc}
      </Text>

      <Group grow>
        <Button component='a' href={props.github} target="_blank" variant="filled" color="blue" style={{ marginTop: '.5rem' }}>
          Github
        </Button>
        {props.website && 
          <Button component='a' href={props.website} target="_blank" variant="filled" color="blue" style={{ marginTop: '.5rem' }}>
            Site
          </Button>
        }
      </Group>
      
    </Card>
  );
}

export default ProjectCard;
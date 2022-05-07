import { Grid } from "@mantine/core";
import ProjectCard from "../card/ProjectCard";

import projects from '../../data/projects.json';

function ProjectSection() {

  const cards : JSX.Element[] = projects.map((project) : any =>
    <Grid.Col xs={6} sm={4} md={4} lg={3} key={project.id}>
      <ProjectCard {...project} year="2022"/>
    </Grid.Col>
  );
  console.log(projects)

  return (
    <section>
      <h2>Projects</h2>
      <Grid align='stretch'>
        {cards}
      </Grid>
    </section>
  );
}

export default ProjectSection;
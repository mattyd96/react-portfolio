import { Grid } from "@mantine/core";
import ProjectCard from "../card/ProjectCard";

import projects from '../../data/projects.json';

function Projects() {

  const cards : JSX.Element[] = projects.map((project) : any =>
    <Grid.Col span={2} key={project.id}>
      <ProjectCard {...project} year="2022"/>
    </Grid.Col>
  );
  console.log(projects)

  return (
    <section>
      <h2>Projects</h2>
      <Grid>
        {cards}
      </Grid>
    </section>
  );
}

export default Projects;
import React from "react";
import Carousel from "react-elastic-carousel";

import Card from "../Card/Card";
import Slider from "../Slider/Slider";

import data from "../../Data/Projects.json";

import { ProjectH1, ProjectsContainer } from "./Projects.styles";

const Projects = ({ id }) => {
    
    return (
        <ProjectsContainer id={id}>
            <ProjectH1>Proyectos</ProjectH1>
            <Slider >
                {data
                    ? data.map((item) => (
                          <Card
                              key={item?.id}
                              title={item?.title}
                              description={item?.description}
                          />
                      ))
                    : null}
            </Slider>
        </ProjectsContainer>
    );
};

export default Projects;

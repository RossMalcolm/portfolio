import React from "react";
import Icon1 from "../../images/svg-fans.svg";
import Icon2 from "../../images/svg-youtube.svg";
import Icon3 from "../../images/svg-message.svg";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard
          to={{ pathname: "https://github.com/RossMalcolm/MyLeague" }}
          target="_blank"
        >
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>MyLeague</ProjectsH2>
          <ProjectsP>Database for Hockey Leagues</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          to={{
            pathname: "https://github.com/RossMalcolm/Video-Browser",
          }}
          target="_blank"
        >
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Video Browser</ProjectsH2>
          <ProjectsP>YouTube Clone</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          to={{
            pathname: "https://github.com/RossMalcolm/ChatApp",
          }}
          target="_blank"
        >
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>ChatApp</ProjectsH2>
          <ProjectsP>Chatroom using socket.io</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

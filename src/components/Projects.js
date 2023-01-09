import {
  Col,
  Container,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Nav from "react-bootstrap/Nav";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/project-img1.png";

export const Projects = () => {
  const projects = [
    {
      title: "Nefzawa.Net",
      description: "Design and Development",
      imgUrl: proImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Voluptate enim eu culpa proident incididunt ullamco excepteur
              irure duis nostrud et Lorem ea ad. Anim tempor voluptate non
              tempor do sint veniam voluptate veniam. Qui id velit Lorem sunt
              proident elit tempor incididunt sit sint veniam qui. Tempor
              eiusmod non aliqua ad Lorem.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center akign-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard Key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">TEst2</TabPane>
                <TabPane eventKey="third">test3</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bgimg"
      ></img>
    </section>
  );
};

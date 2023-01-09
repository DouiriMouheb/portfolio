import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import framwork from "../assets/img/framwork.svg";
import front from "../assets/img/front.svg";
import versionC from "../assets/img/versionC.svg";
import cloud from "../assets/img/cloud.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Laboris et aute velit voluptate deserunt veniam eu incididunt
                est ea occaecat irure. Id sit duis in Lorem id non enim pariatur
                commodo. Culpa non pariatur consectetur officia commodo labore.
                Ex fugiat exercitation proident fugiat cupidatat consectetur
                exercitation fugiat elit in id ea nisi. Id voluptate ullamco id
                reprehenderit ullamco laboris non ad reprehenderit quis do.
                Irure est eiusmod est ea eu mollit proident ut do occaecat
                occaecat nostrud veniam dolore.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={framwork} alt="framwork" />
                </div>
                <div className="item">
                  <img src={front} alt="front" />
                </div>
                <div className="item">
                  <img src={versionC} alt="git" />
                </div>

                <div className="item">
                  <img src={cloud} alt="cloud" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  );
};

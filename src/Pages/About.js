import React, { useContext } from "react";

import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
const About = () => {
  const context = useContext(LanguageContext);
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">{context.language === "uk" ? "Дизайн" : "Design"}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">{context.language === "uk" ? "Команди" : "Team"}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">{context.language === "uk" ? "Програми" : "Program"}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">{context.language === "uk" ? "Фреймворки" : "Frameworks"}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">{context.language === "uk" ? "Бібліотека" : "Library"}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/originals/aa/f0/69/aaf069dc6de7618a63de784b70ad4370.jpg"
                  alt="picture one"
                />
                <p className="p-2 text-center text-wrap bg-primary badge mt-4 fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus
                  condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus
                  quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi
                  quis quam hendrerit, bibendum dui non, mollis lectus.{" "}
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img
                  className="d-block w-100"
                  src="https://web-static.wrike.com/blog/content/uploads/2017/04/growing-pains-820x540px_2.jpg?av=75577628dc6695de786e931bc1cdb35d"
                  alt="picture two"
                />
                <p className="p-2 text-center text-wrap bg-warning badge mt-4 fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus
                  condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus
                  quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi
                  quis quam hendrerit, bibendum dui non, mollis lectus.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img
                  className="d-block w-100"
                  src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png"
                  alt="picture three"
                />
                <p className="p-2 text-center text-wrap bg-primary badge mt-4 fs-6">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus
                  condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus
                  quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi
                  quis quam hendrerit, bibendum dui non, mollis lectus.{" "}
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img
                  className="d-block w-100"
                  src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                  alt="picture fourth"
                />
                <p className="p-2 text-center text-wrap bg-info badge mt-4 fs-6">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus
                  condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus
                  quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi
                  quis quam hendrerit, bibendum dui non, mollis lectus.{" "}
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img
                  className="d-block w-100"
                  src="https://programminglibrarian.org/sites/default/files/partnerships_2.jpg"
                  alt="picture fifth"
                />
                <p className="p-2 text-center text-wrap bg-secondary badge mt-4 fs-6">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus
                  condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus
                  quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi
                  quis quam hendrerit, bibendum dui non, mollis lectus.{" "}
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;

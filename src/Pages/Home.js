import { Button, Card, Container } from "react-bootstrap";
import CarouselBoxHk from "../components/CarouselBoxHk";
import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const [team, setTeam] = useState("Команда");
  const [buttonName, setButtonName] = useState("Про Команду");

  const context = useContext(LanguageContext);

  const memo = useMemo(() => {
    setTeam(context.language === "uk" ? "Команда" : "Team");
    setButtonName(context.language === "uk" ? "Про Команду" : "About Team");
  }, [context.language]);

  return (
    <>
      <CarouselBoxHk />
      <Container>
        <h2 className="text-center m-4">{context.language === "en" ? "Our team" : "Наша команда"}</h2>
        <div className="row align-items-center">
          <div className="col">
            <Card className="m-4 text-center" bg="light">
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
              />
              <Card.Body>
                <Card.Title>{context.language === "en" ? "Naturalists" : "Природознавці"}</Card.Title>
                <Card.Text>{team} 2</Card.Text>
                <Button variant="primary" href="/about">
                  {buttonName}
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="m-4 text-center " bg="light" border="primary">
              <Card.Img
                variant="top"
                src="https://web-static.wrike.com/blog/content/uploads/2017/04/growing-pains-820x540px_2.jpg?av=75577628dc6695de786e931bc1cdb35d"
              />
              <Card.Body>
                <Card.Title>{context.language === "en" ? "Developers" : "Розробники"}</Card.Title>
                <Card.Text>{team} 1</Card.Text>
                <Button variant="primary" href="/about">
                  {buttonName}
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="m-4 text-center" bg="light">
              <Card.Img
                variant="top"
                src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
              />
              <Card.Body>
                <Card.Title>{context.language === "en" ? "Marketers" : "Маркетилоги"}</Card.Title>
                <Card.Text>{team} 3</Card.Text>
                <Button variant="primary" href="/about">
                  {buttonName}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

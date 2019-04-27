import React from 'react';
import { Responsive, Container, Header, Button, List } from 'semantic-ui-react';

const MainBox = () => (
  <Responsive as={Container} minWidth={768}>
    <div className="mainBox">
      <img src="images/mainBoxBg.jpg" className="mainBoxBg" alt="PC" />
      <Container textAlign="center">
        <div className="elips elips1" />
        <div className="elips elips2" />
        <div className="elips elips3" />
        <div className="elips elips4" />
        <div className="elips elips5" />
        <div className="elips elips6" />
        <div className="elips elips7" />
        <div className="elips elips8" />
        <div className="mainBoxContainer">
          <div className="mainBoxText">
            <Header as="h1" textAlign="left">
              Lorem ipsum <br />
              Dolor Sit Amet, <br />
              Lorem
            </Header>
            <br />
            <br />
            <Button size="big" color="black" floated="left">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sing
              Up!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          </div>
          <div className="footer">
            <List horizontal>
              <List.Item href="#">Anasayfa</List.Item>
              <List.Item href="#">Hakkımızda</List.Item>
              <List.Item href="#">WeWantEd Labs</List.Item>
              <List.Item href="#">Etkinlikler</List.Item>
              <List.Item href="#">Blog</List.Item>
            </List>
          </div>
        </div>
      </Container>
    </div>
  </Responsive>
);

export default MainBox;

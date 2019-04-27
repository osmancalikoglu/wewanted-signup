import React from 'react';
import {
  Responsive,
  Container,
  Header,
  Form,
  Button,
  Image
} from 'semantic-ui-react';

const SingleSignUpBox = () => (
  <Responsive as={Container} maxWidth={768}>
    <div className="singleSignUpBox">
      <Container className="boxContainer" textAlign="center">
        <a href="http://www.clkyazilim.com">
          <Image
            src="imgages/LOGO1.png"
            srcSet="images/LOGO1@2x.png 2x,
                images/LOGO1@3x.png 3x"
            alt="logo"
            centered
          />
        </a>
        <br />
        <Header as="h2" textAlign="left">
          Lorem Ipsum is simply dummy text of the printing industry.
        </Header>
        <p className="description">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type it specimen book.
        </p>
        <br />
        <Form inverted>
          <Form.Input
            transparent
            type="text"
            icon="user"
            iconPosition="left"
            placeholder="Adınız"
          />
          <Form.Input
            transparent
            type="text"
            icon="user"
            iconPosition="left"
            placeholder="Soyadınız"
          />
          <Form.Input
            transparent
            type="text"
            icon="mail"
            iconPosition="left"
            placeholder="E-posta adresi"
          />
          <Form.Input
            transparent
            type="text"
            icon="lock"
            iconPosition="left"
            placeholder="Parolanızı giriniz"
          />
          <Form.Input
            transparent
            type="text"
            icon="lock"
            iconPosition="left"
            placeholder="Parolanızı tekrar giriniz"
          />
          <Button fluid className="signUpButton" type="submit">
            İleri
          </Button>
        </Form>
        <a href="#0" className="returnToLogin">
          Giriş Yap'a Geri Dön
        </a>
      </Container>
    </div>
  </Responsive>
);

export default SingleSignUpBox;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Message>
        Sorry, the page you are looking for does not exist.
      </Message>
      <HomeLink to="/">Go back to Home</HomeLink>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-color: #121212; /* Match your app's background */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  font-size: 1.2rem;
  color: #00ff83; /* Change to your preferred color */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default NotFound;
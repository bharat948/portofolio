import React, { Suspense } from 'react';
import styled from 'styled-components';
import Scene from '../components/3d/Scene';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const Home = () => {
  return (
    <HomeContainer>
      <ContentOverlay>
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>Frontend Developer & 3D Enthusiast</Subtitle>
      </ContentOverlay>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading 3D Scene...</div>}>
          <Scene />
        </Suspense>
      </ErrorBoundary>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  color: white;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  opacity: 0.8;
`;

export default Home;
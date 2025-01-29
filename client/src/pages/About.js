import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <p>
          Hi! I'm a passionate frontend developer with expertise in React, Three.js,
          and modern web technologies. I love creating immersive web experiences
          that combine beautiful design with cutting-edge technology.
        </p>
        <SkillsSection>
          <h3>Skills</h3>
          <SkillsList>
            <li>React.js</li>
            <li>Three.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>JavaScript/TypeScript</li>
            <li>HTML/CSS</li>
          </SkillsList>
        </SkillsSection>
      </Content>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  margin-top: 2rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export default About;
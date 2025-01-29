// File: src/pages/Home.js
import React from 'react'
import Scene from '../components/3d/Scene'
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer>
      <TitleOverlay>My Breaking Cube</TitleOverlay>
      <Scene />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const TitleOverlay = styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  z-index: 10;
`

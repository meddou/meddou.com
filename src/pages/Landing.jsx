import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Row from '../layout/row/Row'
import Image from '../Image'

import Medias from '../component/medias/Medias'
import Description from '../component/description/Description'
import Link from '../component/link/Link'

import BasicPage from './BasicPage'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -64px;

  @media only screen and (max-width: 1170px) {
    flex-direction: column;
  }
`

const LandingBackground = styled.div`
  position: absolute;
  top: -50vh;
  height: 200vh;
  left: -100vh;
  background-image: linear-gradient(to right bottom, #7a0056, #961356, #af2854, #c43f51, #d7574e);
  width: 250vh;
  transform: rotate(-35deg);
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;
  min-height: 100vh;

  @media only screen and (max-width: 1170px) {
    margin-top: 74px;
  }
`

const AvatarPicture = styled(Image)`
  height: 50vh;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  align-self: center;
  z-index: 2;

  @media only screen and (max-width: 1170px) {
    display: none;
  }
`

const TitleContainer = styled.div`
  margin-right: 2vw;  
  max-width: 50vw;
  padding: 16px;

  @media only screen and (max-width: 1170px) {
    position: relative;
    left: 0;
    top: 0;
    box-shadow: none;
    margin-top: 56px;
    max-width: 100vw;
  }
`

const TitleStyle = css`
  line-height: 1;
  font-family: 'Oswald', sans-serif;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 4.5em;
  font-weight: normal;
`

const PrimaryTitle = styled.h1`
  ${TitleStyle}
  line-height: 1;
  font-size: 2.5em;
  margin-bottom: 16px;
`

const SecondaryTitle = styled.h2`
  ${TitleStyle}
  margin-top: 12px;
`

const MainDescription = styled(Description)`
  font-size: 1.75em;
  margin: 2em 0;
  margin-top: 8px;
`

const MediaContainerRow = styled(Row)`
  margin-top: 32px;
`

const MediaContainerLink = styled(Link)`
  font-size: 2em;

  a, a:active, a {
    align-self: flex-end;
  }
`

class Landing extends Component {
  // because i'm lazy :)
  static getAge() {
    const birthday = +new Date('1996-11-14');
    return ((Date.now() - birthday) / (31557600000));
  }

  static isDay() {
    const date = new Date()
    const hours = date.getHours()

    return hours >= 6 && hours < 17
  }

  // eslint-disable-next-line
  render() {
    return (
      <BasicPage>
        <Container>
          <LandingBackground />
          <InfoContainer>
            <TitleContainer>
              <SecondaryTitle>
                {Landing.isDay() ? 'Bonjour' : 'Bonsoir'}
                , je suis Mehdi.
              </SecondaryTitle>
              <PrimaryTitle>Développeur Freelance WEB / MOBILE.</PrimaryTitle>
              <MainDescription
                text="Mes expériences à travers une multitude de technologies m'ont permis d’acquérir une expertise des langages de développement de site internet et d'application mobile.<br/>Je vous accompagne dans la réalisation de votre projet de sa conception à sa livraison."
              />
              <MediaContainerRow>
                <MediaContainerLink to="/work">Voir mes projets</MediaContainerLink>
                <Medias className="bp-large" />
              </MediaContainerRow>
            </TitleContainer>
          </InfoContainer>
          <AvatarPicture
            src="/images-webp/mehdi.png"
            alt="Mehdi Meddour"
          />
        </Container>
      </BasicPage>
    )
  }
}

export default Landing

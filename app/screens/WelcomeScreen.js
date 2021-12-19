import React from 'react'
import styled from 'styled-components/native'
import {Screen} from '../components/Screen'
import colors from '../config/colors'

export const WelcomeScreen = () => {

  return (
    <Screen>
      <BackgroundImage source={require('../assets/background.jpg')} blurRadius={4}>
        <LogoContainer>
          <Logo source={require('../assets/logo-red.png')}/>
          <Heading>Sell What You Don´t Need</Heading>
        </LogoContainer>
        <LoginButton/>
        <SignupButton/>
      </BackgroundImage>
    </Screen>
  )
}

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`
const LogoContainer = styled.View`
  flex: -1;
  position: absolute;
  align-items: center;
  top: 70px;
`
const Logo = styled.Image`
  width: 75px;
  height: 75px;
`
const Heading = styled.Text``


const Button = styled.View`
  width: 100%;
  height: 70px;
`
const LoginButton = styled(Button)`
  background-color: ${colors.primary};
`
const SignupButton = styled(Button)`
  background-color: ${colors.secondary};
`
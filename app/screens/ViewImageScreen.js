import React from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Screen} from '../components/Screen'

export const ViewImageScreen = () => {
  return (
    <StyledScreen>
      <HeadingElements>
        <MaterialCommunityIcons name='close' size={30} color='white'/>
        <MaterialCommunityIcons name='delete' size={30} color='white'/>
      </HeadingElements>
      <ImageWrapper>
        <Image source={require('../assets/chair.jpg')}/>
      </ImageWrapper>
    </StyledScreen>
  )
}
const StyledScreen = styled(Screen)`
  background-color: black;
  justify-content: center;
`

const HeadingElements = styled.View`
  position: absolute;
  top: 0;
  height: 10%;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.View`
  height: 66%;
  justify-self: center;
  background-color: azure;
`
const Image = styled.Image`
  width: 100%;
  height: 100%;
`
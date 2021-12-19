import React from 'react'
import styled from 'styled-components/native'
import {Platform} from 'react-native'
import {StatusBar} from 'expo-status-bar'

export const Screen = ({children, ...delegated}) => {
  return <Container {...delegated}>{children}</Container>
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
`

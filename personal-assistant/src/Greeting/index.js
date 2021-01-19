import React from 'react'
import { Container, Hello, Text, TextSmall, TextSmaller } from './styles'

const Greeting = () => {
  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It's a lovely morning in the village...</Text>
      <TextSmall>...and you are a horrible goose.</TextSmall>
      <TextSmaller>...and this is a Walking Copyright Infringement™</TextSmaller>
    </Container>
  )
}

export default Greeting

import React from 'react'
import { Container, Hello, Text, TextSmall, TextSmaller, TextEvenSmaller } from './styles'

const Greeting = () => {
  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It's a lovely morning in the village...</Text>
      <TextSmall>...and you are a horrible goose.</TextSmall>
      <TextSmaller>...and this is a Walking Copyright Infringement.™</TextSmaller>
      <TextEvenSmaller>(for real House House we're not licensed I promise I'm not profiting)</TextEvenSmaller>
    </Container>
  )
}

export default Greeting

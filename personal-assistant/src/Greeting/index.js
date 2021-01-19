import React, { useState, useEffect } from 'react'
import { Container, Hello, Text } from './styles'

const Greeting = () => {
  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It is a beautiful day outside...</Text>
    </Container>
  )
}

export default Greeting

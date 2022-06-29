import { Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface IH1 {
  children: ReactNode
}
export const H1 = ({ children }: IH1) => (
  <Heading as={'h1'} fontSize="2xl" lineHeight={8.5} letterSpacing={'tight'}>
    {children}
  </Heading>
)

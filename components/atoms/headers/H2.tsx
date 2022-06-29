import { Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface IH1 {
  children: ReactNode
}
export const H2 = ({ children }: IH1) => (
  <Heading as={'h2'} fontSize="xl" lineHeight={7.5} letterSpacing={'tighter'}>
    {children}
  </Heading>
)

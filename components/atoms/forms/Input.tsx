import { Input as CharkaInput, InputProps, forwardRef } from '@chakra-ui/react'
import React from 'react'

export const Input = forwardRef<InputProps, 'input'>((props, ref) => (
  <CharkaInput
    backgroundColor="transparent.1"
    focusBorderColor="blue.1"
    errorBorderColor="red.1"
    color="primary"
    ref={ref}
    {...props}
  />
))

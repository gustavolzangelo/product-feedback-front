import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
} from '@chakra-ui/react'
import { Input } from '@components/atoms/forms/Input'
import { useUser } from '@hooks/useUsers'
import Head from 'next/head'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ILoginInputs {
  username: string
  password: string
}

const LoginSchema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ILoginInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
    defaultValues: { username: '', password: '' },
  })

  const { authMutationLogin } = useUser()
  const {
    status: authMutationLoginStatus,
    isSuccess: authMutationLoginSuccess,
    isError: authMutationLoginError,
  } = authMutationLogin

  useEffect(() => {
    if (authMutationLoginSuccess) {
      console.log('success')
    }
    if (authMutationLoginError) {
      console.log('error')
    }
  }, [
    authMutationLoginStatus,
    authMutationLoginSuccess,
    authMutationLoginError,
  ])

  const onSubmit: SubmitHandler<ILoginInputs> = (data, e) => {
    e?.preventDefault()
    authMutationLogin.mutate(data)
  }
  function ms(hours, minutes, seconds) {
    return ((hours * 60 + minutes) * 60 + seconds) * 1000
  }
  console.log(ms(1, 1, 1))
  console.log(ms(1, 1, 1))
  console.log(ms(1, 1, 1))

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page"></meta>
      </Head>
      <Box height="100vh" display="flex" background="transparent.2">
        <Box
          m="0 auto"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap="4">
              <FormControl isInvalid={!!errors.username}>
                <FormLabel htmlFor="username">Usuário</FormLabel>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="username"
                      placeholder="Digite seu usuário..."
                      isInvalid={!!errors.username}
                      {...field}
                    />
                  )}
                />
                {errors.username && (
                  <FormErrorMessage>{errors.username.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="password"
                      placeholder="Digite sua senha..."
                      autoComplete="on"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <Button type="submit" disabled={!isValid}>
                Entrar
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default Login

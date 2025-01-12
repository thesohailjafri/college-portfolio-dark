import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: ReactNode
}

export const MyContainer = ({ children, boxProps, ...props }: Props) => {
  return (
    <Container px={{ base: 4, md: 16 }} mx={'auto'} {...props}>
      <Box {...boxProps}>{children}</Box>
    </Container>
  )
}

export const MyContainerSm = ({ children, ...props }: Props) => {
  return (
    <Container
      px={{ base: 2, md: 4 }}
      maxW={{ md: '3xl' }}
      mx={'auto'}
      {...props}
    >
      {children}
    </Container>
  )
}

"use client"

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ReactNode } from "react"

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box>
      {props.children}
      </Box>
    </ChakraProvider>
  )
}

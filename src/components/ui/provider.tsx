'use client'

import {
  Box,
  ChakraProvider,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import {
  Mona_Sans as BodyFont,
  Playfair_Display as HeadingFont,
} from 'next/font/google'

export const bodyFont = BodyFont({
  variable: '--font-body',
  weight: ['400'],
  subsets: ['latin'],
})

export const headingFont = HeadingFont({
  variable: '--font-heading',
  weight: ['400'],
  subsets: ['latin'],
})

export const system = createSystem(defaultConfig, {
  globalCss: {
    'html, body': {
      lineHeight: '1',
      scrollBehavior: 'smooth',
      bg: 'gray.950',
      color: 'white',
    },
    '::-webkit-scrollbar': {
      width: '10px',
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      bg: 'gray.950',
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      bg: 'gray.700',
      borderRadius: '10px',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      bg: 'white',
    },
  },

  theme: {
    tokens: {
      fonts: {
        heading: { value: headingFont.style.fontFamily },
        body: { value: bodyFont.style.fontFamily },
      },
    },
  },
})

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Box>{props.children}</Box>
    </ChakraProvider>
  )
}

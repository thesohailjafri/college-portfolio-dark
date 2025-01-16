import { Geist, DM_Serif_Display } from 'next/font/google'

export const bodyFont = Geist({
  variable: '--font-body',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const headingFont = DM_Serif_Display({
  variable: '--font-heading',
  weight: ['400'],
  subsets: ['latin'],
})

import { siteMap } from '@/lib/config/default.config'
import { Flex } from '@chakra-ui/react'
import { CNLink } from '../chakra-next'
import { usePathname } from 'next/navigation'
import path from 'path'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <Flex gap={4} flexWrap={'wrap'} py={{ base: 8, lg: 12 }}>
      {items.map((element, index) => (
        <CNLink
          key={index}
          href={element.path}
          color={pathname === element.path ? 'gray.300' : 'gray.500'}
          _hover={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          {element.title}
        </CNLink>
      ))}
    </Flex>
  )
}

const items = [
  {
    title: 'Home',
    path: siteMap.home,
  },
  {
    title: 'Projects',
    path: siteMap.projects,
  },
  {
    title: 'Resume',
    path: siteMap.resume,
  },
  {
    title: 'Contact',
    path: siteMap.contact,
  },
  {
    title: 'Blog',
    path: siteMap.blog,
  },
]

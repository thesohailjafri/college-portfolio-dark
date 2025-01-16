import { Button, Center, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { LuMailPlus } from 'react-icons/lu'
import { MyContainerSm } from './continers'
import { CNLink } from '../chakra-next'

export default function Footer() {
  const items: {
    Icon: IconType
    href: string
    title: string
  }[] = [
    {
      Icon: LuMailPlus,
      href: 'mailto:#',
      title: 'Email',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/thesohailjafri',
      title: 'Github',
    },
    {
      Icon: FaXTwitter,
      href: 'https://x.com/thesohailjafri',
      title: 'Twitter',
    },
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/thesohailjafri/',
      title: 'LinkedIn',
    },
  ]

  return (
    <MyContainerSm marginBottom={10}>
      <Center display={'flex'} gap={5}>
        {items.map((item) => (
          <Button
            key={item.title}
            variant={'outline'}
            p={2}
            color={'white'}
            _hover={{ bg: 'gray.900' }}
            borderRadius={'full'}
            border={0}
          >
            <CNLink href={item.href}>
              <item.Icon />
            </CNLink>
          </Button>
        ))}
      </Center>
    </MyContainerSm>
  )
}

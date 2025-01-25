import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/metahead'
import { siteMap } from '@/lib/config/default.config'
import { Flex, Heading, HStack, Separator, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLink } from 'react-icons/fa6'

export default function index() {
  return (
    <>
      <Metahead
        title="Projects | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.projects}
      />
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          Projects🚀
        </Heading>
        {projectData.map((project, index) => {
          return (
            <Stack gap={4} alignItems="start" key={index}>
              <Flex flexWrap={'wrap'} gapX={4} gapY={2}>
                <Text textStyle={'cardHeading'} color={'white'}>
                  {project.title}
                </Text>
                <HStack gap={4}>
                  <CNLink
                    hidden={!project.previewUrl}
                    href={project.previewUrl!}
                    color={'white'}
                  >
                    <FaLink size={'1.2rem'} />
                  </CNLink>
                  <CNLink
                    hidden={!project.gitUrl}
                    href={project.gitUrl!}
                    color={'white'}
                  >
                    <FaGithub size={'1.2rem'} />
                  </CNLink>
                </HStack>
              </Flex>
              <Separator opacity={0.2} />
              <Text lineHeight={1.5}>{project.description}</Text>
            </Stack>
          )
        })}
      </Stack>
    </>
  )
}

export type Projects = {
  title: string
  description: string
  previewUrl?: string
  gitUrl?: string
}

export const projectData: Projects[] = [
  {
    title: 'Project Alpha',
    description:
      'A task management application designed to help users organize and prioritize their daily tasks effectively.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Beta',
    description:
      'A real-time chat application with user authentication and custom chat rooms.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Gamma',
    description:
      'An e-commerce platform for small businesses, featuring product catalogs, carts, and payment integration.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Delta',
    description:
      'A portfolio website template for freelancers to showcase their skills and projects.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Epsilon',
    description:
      'A weather forecast app that provides real-time weather updates and a 7-day forecast.',
    previewUrl: '#',
    gitUrl: '#',
  },
]

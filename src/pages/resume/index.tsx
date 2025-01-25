// import { Button } from '@/components/ui/button'
import { CNLink } from '@/components/chakra-next'
import {
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function index() {
  return (
    <Stack gap={12}>
      <Flex justifyContent={'space-between'}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          My Resume📝
        </Heading>
        <Button
          p={2}
          variant={'outline'}
          color={'white'}
          _hover={{ bg: 'gray.900' }}
          borderColor={'gray.700'}
        >
          <CNLink
            href="/sohailjafri_resume.pdf"
            target="_blank"
            color={'white'}
            _focus={{ outline: 'none', boxShadow: 'none' }}
          >
            Download Resume
          </CNLink>
        </Button>
      </Flex>
      <Stack gap={8}>
        <Heading as="h2" fontSize="2xl">
          Work Experience
        </Heading>
        {experienceData.map((experience, index) => (
          <Stack key={index} gap={4}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Text textStyle={'cardHeading'} color={'white'}>
                {experience.company} | {experience.title}
              </Text>
              <Text fontSize={'sm'}>
                {experience.fromDate} - {experience.toDate}
              </Text>
            </Flex>
            <Separator opacity={0.2} />
            <Stack as="ul" listStyleType={'disc'} ml={5}>
              {experience.deliverables.map((deliverable, index) => (
                <Box as="li" key={index}>
                  {deliverable}
                </Box>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack gap={8}>
        <Heading as="h2" fontSize="2xl">
          Education
        </Heading>
        {educationData.map((education, index) => (
          <Stack key={index} gap={4}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Text textStyle={'cardHeading'} color={'white'}>
                {education.degree}
              </Text>
              <Text fontSize={'sm'}>
                {education.fromDate} - {education.toDate}
              </Text>
            </Flex>
            <Separator opacity={0.2} />
            <Stack as="ul" listStyleType={'disc'} ml={5} gap={2}>
              <Box as={'li'}>CGPA: {education.cgpa}</Box>
              <Box as={'li'}>{education.location}</Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack gap={8}>
        <Heading as="h2" fontSize="2xl">
          Awards & Certifications
        </Heading>
        <Stack gap={4} separator={<Separator opacity={0.2} />}>
          {awardData.map((award, index) => (
            <Stack key={index} gap={2}>
              <Text textStyle={'cardHeading'} color={'white'}>
                {award.title}
              </Text>
              <Text fontSize={'sm'}>
                {award.date} |{' '}
                <CNLink href={award.url}>View Certificate</CNLink>
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

type Experience = {
  company: string
  title: string
  fromDate: string
  toDate: string
  deliverables: string[]
}

const experienceData: Experience[] = [
  {
    company: 'Placeholder Corp',
    title: 'Software Engineer',
    fromDate: '2022-03-01',
    toDate: '2024-08-15',
    deliverables: [
      'Developed and maintained a content management system using modern frameworks',
      'Optimized system performance, reducing latency by 25%',
      'Collaborated with the QA team to ensure seamless releases',
      'Wrote comprehensive technical documentation for APIs',
    ],
  },
  {
    company: 'Dummy Tech Solutions',
    title: 'Backend Developer',
    fromDate: '2020-07-01',
    toDate: '2022-02-28',
    deliverables: [
      'Designed and deployed scalable APIs to handle high-volume traffic',
      'Implemented data security measures, ensuring compliance with industry standards',
      'Streamlined database operations, increasing query efficiency by 40%',
      'Collaborated with the DevOps team to enhance deployment pipelines',
    ],
  },
]

type Education = {
  degree: string
  cgpa: string
  fromDate: string
  toDate: string
  location: string
}

export const educationData: Education[] = [
  {
    degree: 'Bachelor Of Engineering (IT)',
    cgpa: '3.2/4',
    fromDate: 'Dec 2020',
    toDate: 'May 2023',
    location: 'Mumbai, MH, IN',
  },
  {
    degree: 'Higher Secondary Certificate',
    cgpa: '3.5/4',
    fromDate: 'Dec 2018',
    toDate: 'May 2020',
    location: 'Mumbai, MH, IN',
  },
]

type Awards = {
  title: string
  date: string
  url: string
}

export const awardData: Awards[] = [
  {
    title: 'AWS Cloud Practitioner',
    date: '2022',
    url: '#',
  },
  {
    title: 'Open Source Contribution',
    date: '2021',
    url: '#',
  },
  {
    title: 'SQL (Advanced)',
    date: '2020',
    url: '#',
  },
  {
    title: 'Problem Solving (Intermediate)',
    date: '2019',
    url: '#',
  },
]

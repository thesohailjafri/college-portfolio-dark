import { CNLink } from '@/components/chakra-next'
import { MyContainerSm } from '@/components/ui/continers'
import { Heading, Link, Separator, Stack, Text } from '@chakra-ui/react'
import { CiMail } from 'react-icons/ci'
import { GoArrowUpRight } from 'react-icons/go'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <MyContainerSm marginBottom={10}>
        <Stack gap={8} separator={<Separator opacity={0.2} />}>
          <Stack gap={2}>
            <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
              Sup, I’m Sohail Jafri
            </Heading>
            <Text color={'gray.400'} lineHeight={1.5}>
              {' '}
              I’m a Full Stack Web Developer from Mohali, India, trying to make
              the internet a bit cooler one website at a time.
            </Text>
          </Stack>
          <Stack gap={3}>
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
              Professional Work
            </Heading>
            <Text color={'gray.400'} lineHeight={1.5}>
              {' '}
              I specialize in creating user-friendly digital experiences.
              Currently, I work as a Freelance Developer with Vibranium
              SoftVibranium Soft where we are building a flight booking project
              and Keizer WorksKeizer Works, where I maintain their open-source
              projects and contribute to innovative solutions.
            </Text>
            <Text color={'gray.400'} lineHeight={1.5}>
              {' '}
              One of my most significant achievements is developing
              WorldtravelsWorldtravels, a B2B flight booking platform for a
              travel agency. For more of my projects, visit the Projects page.
            </Text>
          </Stack>
          <Stack gap={3}>
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
              Leadership & Community
            </Heading>
            <Text color={'gray.400'} lineHeight={1.5}>
              {' '}
              As the Team Lead at the Innovation Club of CCET College, I’ve
              learned how to lead a team and stay organized. I also assist in
              ICT training sessions, teaching government employees essential
              computer skills. Additionally, I help organize the Talent Hunt
              cultural program and serve as the student coordinator for Jhalak,
              our college’s digital newsletter.
            </Text>
          </Stack>
          <Stack gap={3}>
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
              Personal Interests
            </Heading>
            <Text color={'gray.400'} lineHeight={1.5}>
              Outside of work, I enjoy exploring Vedic astrology, playing the
              guitar, and spending time with friends. I’m also pursuing a
              diploma in Computer Science Engineering (CSE).
            </Text>
          </Stack>
          <Stack gap={3}>
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
              Writing
            </Heading>
            <Text color={'gray.400'} lineHeight={1.5}>
              I’ve started writing blogs to help others improve their
              engineering skills. Stay tuned for more content!
            </Text>
            <CNLink
              width={'fit-content'}
              _focus={{ outline: 'none', boxShadow: 'none' }}
              display={'flex'}
              href="https://x.com/thesohailjafri"
              target="_blank"
            >
              <GoArrowUpRight />
              Follow me
            </CNLink>
            <CNLink
              width={'fit-content'}
              _focus={{ outline: 'none', boxShadow: 'none' }}
              display={'flex'}
              href="mailto:thezenlabs.in@gmail.com"
              target="_blank"
            >
              <CiMail />
              thezenlabs.in@gmail.com
            </CNLink>
          </Stack>
        </Stack>
      </MyContainerSm>

      {/* <Footer /> */}
    </>
  )
}

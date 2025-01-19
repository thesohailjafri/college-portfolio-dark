// import { Button } from '@/components/ui/button'
import { CNLink } from "@/components/chakra-next";
import { MyContainer } from "@/components/ui/continers";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function index() {
  return (
    <MyContainer marginBottom={10}>
      <Stack gap={8}>
        <Flex justifyContent={"space-between"}>
          <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
            My Resume📝
          </Heading>
          <Button
            p={2}
            variant={"outline"}
            color={"white"}
            _hover={{ bg: "gray.900" }}
            borderColor={"gray.700"}
          >
            <CNLink
              href="https://thesohailjafri.vercel.app/Sohail_Jafri_Resume.pdf"
              target="_blank"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              Download Resume
            </CNLink>
          </Button>
        </Flex>
        <Heading as="h2" fontSize="2xl" fontWeight="bold" textAlign="start">
          Work Experience
        </Heading>
        <Stack gap={2}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize="xl" fontWeight="medium" textAlign="start">
              APPVENT LLP | Full Stack Software Developer
            </Text>
            <Text color="gray.600" fontSize={"sm"}>
              Apr 2020 - Oct 2021 | Mumbai, MH, IN
            </Text>
          </Flex>

          <Box as="ul" listStyleType={"disc"} ml={5} color={"gray.500"}>
            <li>
              Developed an ERP system using GraphQL, Next.js, Node.js, and
              MongoDB for seamless manufacturing to distribution management.
            </li>
            <li>
              Implemented real-time notications with Socket.io and email
              notications via Postmark.
            </li>
            <li>
              Designed and deployed an e-commerce app for homemade candles with
              custom integrations with Amazon and Flipkart.
            </li>
            <li>
              Implemented personalized opt-in and opt-out notication system
              using browser Web Push APIs, alongside Mailjet integration for
              email functionality.
            </li>
            <li>
              Created SEO-focused tools to generate and submit pages daily to
              Bind and Google indexing APIs for enhanced search engine
              visibility.
            </li>
          </Box>
        </Stack>
        <hr color="gray.100" />
        <Stack gap={2}>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" textAlign="start">
            Education
          </Heading>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading
              as="h3"
              fontSize="xl"
              fontWeight="medium"
              textAlign="start"
            >
              BACHELOR OF ENGINEERING (IT) | CGPA: 3.2/4
            </Heading>
            <Text color="gray.600" fontSize={"sm"}>
              Dec 2020 - May 2023 | Mumbai, MH, IN
            </Text>
          </Flex>
        </Stack>
        <hr color="gray.100" />
        <Stack gap={2}>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" textAlign="start">
            Awards
          </Heading>
          <Box as="ul" listStyleType={"disc"} ml={5} color={"gray.500"}>
            <li>AWS Cloud Practitioner.</li>
            <li>Open Source Contribution.</li>
            <li>SQL (Advanced).</li>
            <li>Problem Solving (Intermediate).</li>
          </Box>
        </Stack>
      </Stack>
    </MyContainer>
  );
}

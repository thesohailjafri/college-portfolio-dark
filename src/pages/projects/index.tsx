import { CNLink } from "@/components/chakra-next";
import { MyContainer } from "@/components/ui/continers";
import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <MyContainer marginBottom={10}>
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          Projects
        </Heading>
        <CNLink
          href="https://withsam.in/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              With Sam
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              An awesome portfolio website for Samihan, who is a Video Editor
              and YouTuber. The website highlights his eclectic personality and
              showcases his work.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
        <CNLink
          href="https://asahiramen.in/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              Asahi Ramen
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              A website for the best Ramen House in Mumbai and there is as good
              as there ramen. If we say so ourselves.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />

        <CNLink
          href="https://chakraframer.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              Chakra Framer
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              UI lib that provides free ready to use chakra UI and Framer Motion
              components for your next project.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />

        <CNLink
          href="https://mymusicpiechart.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              My Music Pie Chart
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              A fun project that visualizes my music taste in a pie chart.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />

        <CNLink
          href="https://gpacalculate.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              GPA Calculate
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              A GPA Calculator that is for students seeking accurate and fast
              GPA calculations. This is a pSEO implementation experiment.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
        <CNLink
          href="https://santytutorials.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              Santy Tutorials
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              Santy tutorials were facing a problem with their website. As it
              looked out of space and outdated. We gave it a fresh look and feel
              with new branding and super fast and awesome website.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
        <CNLink
          href="https://highriserealty.in/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              High Rise Realty
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              High Rise Realty has been a trusted name in the real industry for
              over 15 years in mumbai so we gave them a website that reflects
              their legacy.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
        <CNLink
          href="https://webenetic.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              Webenetic Pvt. Ltd.
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              Webenetic is a digital marketing company that help businesses grow
              their sales and revenue. We gave them a website that reflects
              their expertise and services.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
        <CNLink
          href="https://www.tencodlife.com/"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              Tencode Life Sciences
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              Tencode is pharmaceutical company that is an a mission to make
              healthcare affordable and accessible to all. We gave them a
              website that reflects their wide range of products and services.
            </Text>
          </Stack>
        </CNLink>

        <hr color="gray.100" />
      </Stack>
    </MyContainer>
  );
}

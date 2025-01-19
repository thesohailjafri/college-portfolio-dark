import { CNLink } from "@/components/chakra-next";
import { Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";


export type HomePage = {
    title : string
    content : ReactNode
}


export const homepage: HomePage[] = [
  {
    title: "Professional Work",
    content: (
      <Stack gap={2}>
        <Text>
          I specialize in creating user-friendly digital experiences. Currently,
          I work as a Freelance Developer with Vibranium SoftVibranium Soft
          where we are building a flight booking project and Keizer WorksKeizer
          Works, where I maintain their open-source projects and contribute to
          innovative solutions.
        </Text>
        <Text>
          One of my most significant achievements is developing
          WorldtravelsWorldtravels, a B2B flight booking platform for a travel
          agency. For more of my projects, visit the Projects page.
        </Text>
      </Stack>
    ),
  },
  {
    title: "Leadership & Community",
    content: (
        <Text>
        As the Team Lead at the Innovation Club of CCET College, I’ve learned how to lead a team and stay organized. I also assist in ICT training sessions, teaching government employees essential computer skills. Additionally, I help organize the Talent Hunt cultural program and serve as the student coordinator for Jhalak, our college’s digital newsletter.
        </Text>
    ),
  },
  {
    title: "Personal Interests",
    content: (
        <Text>
        Outside of work, I enjoy exploring Vedic astrology, playing the guitar, and spending time with friends. I’m also pursuing a diploma in Computer Science Engineering (CSE).
        </Text>
    ),
  },
  {
    title: "Writing",
    content: (
       <Stack gap={3}>
         <Text>
        I’ve started writing blogs to help others improve their engineering skills. Stay tuned for more content!
        </Text>
        <CNLink
        width={"fit-content"}
        _focus={{ outline: "none", boxShadow: "none" }}
        display={"flex"}
        href="https://x.com/thesohailjafri"
        target="_blank"
      >
        <GoArrowUpRight />
        Follow me
      </CNLink>
      <CNLink
        width={"fit-content"}
        _focus={{ outline: "none", boxShadow: "none" }}
        display={"flex"}
        href="mailto:thezenlabs.in@gmail.com"
        target="_blank"
      >
        <CiMail />
        thezenlabs.in@gmail.com
      </CNLink>
       </Stack>
    ),
  },
];

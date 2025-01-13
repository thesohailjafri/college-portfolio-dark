import { MyContainerSm } from "@/components/ui/continers";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <MyContainerSm marginBottom={10}>
      <Stack gap={8}>
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Writing
      </Heading>
        <Link
          as="a"
          _focus={{ outline: "none", boxShadow: "none" }}
          href="https://dev.to/thesohailjafri/the-must-have-seo-checklist-for-developers-192i"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
              The Must-Have SEO Checklist for Developers For 2025
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
              So I have been working on a few SEO Focused projects lately and I
              thought I would share some of the best practices and strategies I
              have learned along the way for Next.js developers.
            </Text>
            <Text color="gray.400" fontSize={'sm'}>Dec 29&apos;24 - 8 mins read</Text>
          </Stack>
        </Link>
        <hr color="gray.100"/>
        <Link
          as="a"
          _focus={{ outline: "none", boxShadow: "none" }}
          href="https://dev.to/thesohailjafri/why-beginners-crush-it-with-typescript-hon"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
            Why Beginners CRUSH IT with TypeScript
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
            If you&apos;re just starting your coding journey or looking to level up your skills, you might be wondering whether to learn JavaScript or TypeScript. JavaScript is the most popular programming language for web development, but TypeScript is gaining traction for its strong typing and other helpful features. In this article, I&apos;ll share seven reasons why beginners should choose TypeScript over JavaScript. Let&apos;s dive in!
            </Text>
            <Text color="gray.400" fontSize={'sm'}>Nov 19&apos;24 - 5 mins read</Text>
          </Stack>
        </Link>
        <hr color="gray.100"/>
        <Link
          as="a"
          _focus={{ outline: "none", boxShadow: "none" }}
          href="https://dev.to/thesohailjafri/how-to-choose-the-right-ui-library-for-your-next-big-project-51ok"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
            How to Choose the Right UI Library for your next Big Project🚀
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
            With today’s powerful component libraries, building interfaces has never been easier. But with so many options available, how do you know which one to pick? Here’s a quick guide on what I usually consider when choosing the right library for my projects.
            </Text>
            <Text color="gray.400" fontSize={'sm'}>Nov 11&apos;24 - 2 mins read</Text>
          </Stack>
        </Link>
        <hr color="gray.100"/>
        <Link
          as="a"
          _focus={{ outline: "none", boxShadow: "none" }}
          href="https://dev.to/thesohailjafri/brutal-truths-about-freelancing-bhg"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
            Brutal Truths About Freelancing: Income, Struggles and Relationships
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
            But the reality of freelancing was far more brutal than I had imagined. From the feast-or-famine income to the isolation struggles, I faced some hard truths about the freelance life.
            </Text>
            <Text color="gray.400" fontSize={'sm'}>Jan 6 - 5 mins read</Text>
          </Stack>
        </Link>
        <hr color="gray.100"/>
        <Link
          as="a"
          _focus={{ outline: "none", boxShadow: "none" }}
          href="https://dev.to/thesohailjafri/dont-make-this-mistake-choosing-the-wrong-database-could-cost-you-30gi"
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Stack gap={4} alignItems="start">
            <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
            Don&apos;t Make This Mistake: Choosing the Wrong Database Could Cost You!
            </Heading>
            <Text color="gray.400" lineHeight={1.5}>
            So, consider you&apos;re building a startup, and it’s time to decide where all that precious data is going to live. Is it SQL or NoSQL? Relax, it’s not as intimidating as it sounds. Let’s break it down, startup-style. 🚀
            </Text>
            <Text color="gray.400" fontSize={'sm'}>Jan 2 - 3 mins read</Text>
          </Stack>
        </Link>
        <hr color="gray.100"/>
      </Stack>
    </MyContainerSm>
  );
}

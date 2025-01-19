import { CNLink } from "@/components/chakra-next";
import { MyContainer } from "@/components/ui/continers";
import { projects } from "@/data/project.data";
import { Heading, Separator, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <MyContainer marginBottom={10}>
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          Projects
        </Heading>
        {projects.map((project, index) => {
          return (
           <>
            <CNLink
            key={index}
            href={project.href}
            _hover={{ textDecoration: "none" }}
            target="_blank"
          >
            <Stack gap={4} alignItems="start">
              <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
               {project.title}
              </Heading>
              <Text color="gray.500" lineHeight={1.5}>
                {project.description}
              </Text>
            </Stack>
          </CNLink>
          <Separator opacity={0.2}/>
           </>
          )
        } )}
       

      </Stack>
    </MyContainer>
  );
}

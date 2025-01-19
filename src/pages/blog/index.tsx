import { CNLink } from "@/components/chakra-next";
import { MyContainer } from "@/components/ui/continers";
import { blogs } from "@/data/blog.data";
import { Heading, Separator, Stack, Text } from "@chakra-ui/react";

export default function index() {
  return (
    <MyContainer marginBottom={10}>
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
          Writing
        </Heading>
        {blogs.map((blog, index) => {
  return (
    <Stack key={index}>
      <CNLink
        href={blog.href}
        _hover={{ textDecoration: "none" }}
        target="_blank"
      >
        <Stack gap={4} alignItems="start">
          <Heading as="h3" fontSize="xl" fontWeight="bold" textAlign="start">
            {blog.title}
          </Heading>
          <Text color="gray.500" lineHeight={1.5}>
            {blog.description}
          </Text>
          <Text color="gray.600" fontSize={"sm"}>
            {blog.date} - {blog.readTime}
          </Text>
        </Stack>
      </CNLink>
      <Separator opacity={0.2}/>
    </Stack>
  );
})}

      </Stack>
    </MyContainer>
  );
}

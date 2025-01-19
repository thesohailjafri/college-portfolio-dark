import { MyContainer } from "@/components/ui/continers";
import { homepage } from "@/data/home.data";
import { Heading, Separator, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <MyContainer marginBottom={10}>
        <Stack gap={8} separator={<Separator opacity={0.2} />}>
          <Stack gap={2}>
            <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
              Sup, I’m Sohail Jafri
            </Heading>
            <Text color={"gray.500"} lineHeight={1.5}>
              {" "}
              I’m a Full Stack Web Developer from Mohali, India, trying to make
              the internet a bit cooler one website at a time.
            </Text>
          </Stack>
          {homepage.map((content, index) => {
            return (
              <Stack key={index}>
                <Heading as="h2" fontSize="2xl" fontWeight="bold">
                  {content.title}
                </Heading>
                <Text color={"gray.500"} lineHeight={1.5}>
                  {content.content}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </MyContainer>

      {/* <Footer /> */}
    </>
  );
}

import { Button, Center, Link } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { MyContainerSm } from "./continers";

export default function Footer() {
  return (
    <MyContainerSm marginBottom={10}>
      <Center display={"flex"} gap={5}>
        <Button variant={"outline"} p={2} color={'white'} _hover={{bg : "gray.900"}} borderRadius={"full"} border={0}>
          <Link
            _focus={{ outline: "none", boxShadow: "none" }}
            href="mailto:thezenlabs.in@gmail.com"
          >
            <CiMail />
          </Link>
        </Button>
        <Button variant={"outline"} p={2} color={'white'} _hover={{bg : "gray.900"}} borderRadius={"full"} border={0}>
          <Link
            _focus={{ outline: "none", boxShadow: "none" }}
            href="https://github.com/thesohailjafri"
          >
            <VscGithubAlt />
          </Link>
        </Button>
        <Button variant={"outline"} p={2} color={'white'} _hover={{bg : "gray.900"}} borderRadius={"full"} border={0}>
          <Link
            _focus={{ outline: "none", boxShadow: "none" }}
            href="https://x.com/thesohailjafri"
          >
            <RiTwitterXLine />
          </Link>
        </Button>
        <Button variant={"outline"} p={2} color={'white'} _hover={{bg : "gray.900"}} borderRadius={"full"} border={0}>
          <Link
            _focus={{ outline: "none", boxShadow: "none" }}
            href="https://www.linkedin.com/in/thesohailjafri/"
          >
            <RiLinkedinBoxLine />
          </Link>
        </Button>
      </Center>
    </MyContainerSm>
  );
}

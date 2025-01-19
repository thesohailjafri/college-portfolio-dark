import { siteMap } from "@/lib/config/default.config";
import { Box } from "@chakra-ui/react";
import { CNLink } from "../chakra-next";
import { MyContainer } from "./continers";

export default function Navbar() {
  return (
    <Box p={{ md: 12 }} mt={{ base: 10, md: 0 }} mb={{ base: 8, md: 0 }}>
      <MyContainer>
        <Box display={"flex"} gap={{ base: 4 }}>
          {navbar.map((element, index) => (
            <CNLink key={index} href={element.path}>
              {element.title}
            </CNLink>
          ))}
        </Box>
      </MyContainer>
    </Box>
  );
}

const navbar = [
  {
    title: "Home",
    path: siteMap.home,
  },
  {
    title: "Projects",
    path: siteMap.projects,
  },
  {
    title: "Resume",
    path: siteMap.resume,
  },
  {
    title: "Contact",
    path: siteMap.contact,
  },
  {
    title: "Blog",
    path: siteMap.blog,
  },
];

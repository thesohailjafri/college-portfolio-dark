import { Box, Link } from "@chakra-ui/react";
import { MyContainerSm } from "./continers";
import { siteMap } from "@/lib/config/default.config";

export default function Navbar() {
  return (
    <Box p={{ md: 12 }} mt={{ base: 10, md: 0 }} mb={{ base: 8, md: 0 }}>
      <MyContainerSm>
        <Box display={"flex"} gap={{ base: 4 }}>
          {navbar.map((element, index) => (
            <Link 
            _focus={{ outline: "none", boxShadow: "none" }} 

            key={index} href={element.path}>
              {element.title}
            </Link>
          ))}
        </Box>
      </MyContainerSm>
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

import { Flex, Heading, VStack, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Hey Anand
        </Heading>
        <Spacer></Spacer>
        <a href="https://www.instagram.com/anand.coder/" target="_blank">
          <IconButton
            icon={<FaInstagram />}
            isRound="true"
            // onClick={toggleColorMode}
          ></IconButton>
        </a>
        <a href="https://www.linkedin.com/in/anandpatel504/" target="_blank">
          <IconButton
            icon={<FaLinkedin />}
            isRound="true"
            // onClick={toggleColorMode}
          ></IconButton>
        </a>
        <a href="https://twitter.com/anandpatel504" target="_blank">
          <IconButton
            ml={2}
            icon={<FaTwitterSquare />}
            isRound="true"
            // onClick={toggleColorMode}
          ></IconButton>
        </a>
        <a href="https://github.com/anandpatel504" target="_blank">
          <IconButton
            ml={2}
            icon={<FaGithub />}
            isRound="true"
            // onClick={LinkHandler}
          ></IconButton>
        </a>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;

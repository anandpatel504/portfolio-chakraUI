import { Flex, Heading, VStack, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
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
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={"https://github.com/anandpatel504"}
        ></IconButton>
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

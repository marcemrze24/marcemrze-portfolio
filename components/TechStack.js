import { HStack, VStack, Text } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiChakraui, SiSass, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

function TechStack() {
    return (
        <HStack overflow="auto" spacing={{ base: 5, lg: 8 }} maxW="100%">
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <AiFillHtml5 color="red" />
                <Text fontSize="md">Html</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <FaCss3 color="blue" />
                <Text fontSize="md">Css</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <SiJavascript color="yellow" />
                <Text fontSize="md">Javascript</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <FaReact color="skyblue" />
                <Text fontSize="md">React</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <FaNodeJs color="green" />
                <Text fontSize="md">Node</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <TbBrandNextjs />
                <Text fontSize="md">Next</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <BsGit color="crimson" />
                <Text fontSize="md">Git</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <SiChakraui color="teal" />
                <Text fontSize="md">ChakraUI</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <SiSass color="pink" />
                <Text fontSize="md">Sass</Text>
            </VStack>
            <VStack fontSize={{ base: "4xl", lg: "5xl" }}>
                <FaBootstrap color="purple" />
                <Text fontSize="md">Bootstrap</Text>
            </VStack>
        </HStack>
    );
}

export default TechStack;

import TechStack from "./TechStack";
import {
    Heading,
    Flex,
    Text,
    Link,
    SimpleGrid,
    GridItem,
    VStack,
    Highlight,
    HStack,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ReactIcon } from "@chakra-ui/icons";
import profileImage from "../public/portfolio-profile.png";
import Image from "next/image";

function Header() {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            h="full"
            p={{ base: 6, lg: 0 }}
            placeContent={{ base: "stretch", lg: "center" }}
        >
            <GridItem colSpan={{ base: 1, lg: 1 }} justifySelf="center">
                <Box
                    w={{ base: "220px", lg: "280px" }}
                    h={{ base: "220px", lg: "280px" }}
                    borderRadius="full"
                    overflow="hidden"
                    backgroundColor={useColorModeValue("blue.500", "teal.200")}
                >
                    <Image
                        style={{ objectPosition: "0 -7rem" }}
                        src={profileImage}
                        alt="profileImage"
                    />
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
                <VStack spacing={6}>
                    <Heading
                        size={{ base: "2xl", sm: "3xl" }}
                        textAlign="center"
                    >
                        <Highlight
                            query="React"
                            styles={{
                                px: "2",
                                py: "0",
                                rounded: "full",
                                bg: useColorModeValue("blue.200", "teal.300"),
                                color: "black",
                            }}
                        >
                            Front-End React Developer
                        </Highlight>
                        <ReactIcon
                            marginStart={2}
                            color={useColorModeValue("blue.300", "teal.300")}
                        />
                    </Heading>
                    <Text
                        fontSize={{ md: "lg" }}
                        textAlign="center"
                        px={{ base: 0, lg: 16 }}
                    >
                        Hi, I'm Marcelo Mercado. A passionate Front-end React
                        Developer based in Buenos Aires, Argentina. 🇦🇷
                    </Text>
                    <HStack spacing={5} w="full" justifyContent="center">
                        <Link
                            href="https://github.com/marcemrze24"
                            isExternal
                            style={{ fontSize: "2.2rem" }}
                        >
                            <BsGithub />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/marcelo-daniel-mercado-444224228/"
                            isExternal
                            style={{ fontSize: "2.2rem" }}
                            color={useColorModeValue("blue.800", "blue.400")}
                        >
                            <BsLinkedin />
                        </Link>
                    </HStack>
                </VStack>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 3 }} mt={{ md: 8, lg: 16 }}>
                <Flex flexDirection="column" gap={8} alignItems="center">
                    <Heading
                        size="lg"
                        borderBottom="2px"
                        paddingBottom="8px"
                        color={useColorModeValue("blue.500", "teal.200")}
                    >
                        Tech Stack
                    </Heading>
                    <TechStack />
                </Flex>
            </GridItem>
        </SimpleGrid>
    );
}

export default Header;

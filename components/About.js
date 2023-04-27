import {
    SimpleGrid,
    GridItem,
    Heading,
    AspectRatio,
    Flex,
    Text,
    Button,
    useColorModeValue,
    Highlight,
} from "@chakra-ui/react";
import Image from "next/image";
import aboutImage from "../public/menem-about.jpg";
import { DownloadIcon } from "@chakra-ui/icons";

function About() {
    return (
        <Flex
            paddingTop={14}
            flexDirection="column"
            gap={{ base: 14, lg: 0 }}
            textAlign="center"
            h="100%"
        >
            <Heading
                size="2xl"
                color={useColorModeValue("blue.500", "teal.200")}
            >
                About Me
            </Heading>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                rowGap={12}
                columnGap={{ lg: 12 }}
                p={{ base: 0, sm: 4, lg: 0 }}
                h="full"
                placeContent="center"
            >
                <GridItem colSpan={1} px={{ md: 2, lg: 0 }}>
                    <AspectRatio ratio={{ base: 5 / 3, sm: 5 / 2, lg: 5 / 5 }}>
                        <Image
                            src={aboutImage}
                            alt="aboutMe"
                            style={{
                                borderRadius: "16px",
                            }}
                        />
                    </AspectRatio>
                </GridItem>
                <GridItem colSpan={1} px={{ md: 2, lg: 4 }}>
                    <Text mb={{ base: 8, lg: 12 }} fontSize="lg">
                        As a Junior{" "}
                        <span style={{ color: "teal", fontWeight: "bold" }}>
                            Front-End Developer
                        </span>
                        , I handle all of the developer tools needed for making
                        complex and scalable projects. I excel in designing and
                        maintaining
                        <span style={{ color: "teal", fontWeight: "bold" }}>
                            {" "}
                            responsive
                        </span>{" "}
                        websites that offer a smooth user experience. My
                        expertise lies in crafting dynamic, engaging interfaces
                        through writing clean and optimized code and utilizing
                        cutting-edge development tools and techniques, such as{" "}
                        <span style={{ color: "teal", fontWeight: "bold" }}>
                            SEO
                        </span>
                        . I also have a{" "}
                        <span style={{ color: "teal", fontWeight: "bold" }}>
                            solid understanding about backend development
                        </span>{" "}
                        and its core tools, giving me the chance to make more
                        flexible projects and to work in harmony with other
                        developers. Check out my resumee down below ⤵
                    </Text>
                    <a href="#!" download>
                        <Button
                            colorScheme="teal"
                            leftIcon={<DownloadIcon />}
                            size="lg"
                        >
                            Resumee
                        </Button>
                    </a>
                </GridItem>
            </SimpleGrid>
        </Flex>
    );
}

export default About;

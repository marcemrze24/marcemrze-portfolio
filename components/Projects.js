import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Flex,
    Heading,
    SimpleGrid,
    GridItem,
    Card,
    CardBody,
    Stack,
    HStack,
    Text,
    CardFooter,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import shopper from "../public/shopper.png";
import marcegpt from "../public/marcegpt.png";

function PortfolioCard({ image, title, description, codeLink, demoLink }) {
    return (
        <Card maxW="md">
            <CardBody>
                <Image src={image} alt={title} />
                <Stack mt={3} spacing={3}>
                    <Heading>{title}</Heading>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <CardFooter justifyContent="center">
                <HStack spacing={6}>
                    <Link href={codeLink} isExternal fontSize={22}>
                        Code <ExternalLinkIcon />
                    </Link>
                    <Link href={demoLink} isExternal fontSize={22}>
                        Demo <ExternalLinkIcon />
                    </Link>
                </HStack>
            </CardFooter>
        </Card>
    );
}

function Projects() {
    return (
        <Flex
            paddingTop={14}
            flexDirection="column"
            gap={14}
            textAlign="center"
        >
            <Heading
                size="2xl"
                color={useColorModeValue("blue.500", "teal.200")}
            >
                Projects
            </Heading>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                rowGap={12}
                columnGap={12}
                p={{ base: 1, sm: 8 }}
            >
                <GridItem colSpan={1}>
                    <PortfolioCard
                        title="Shopper E-Commerce"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque porro, optio consequatur rem corporis est assumenda sint non beatae dolorem blanditiis similique nesciunt adipisci error quidem voluptas et cupiditate voluptatum?"
                        image={shopper}
                        codeLink="https://github.com/marcemrze24/proyecto-final-mercado"
                        demoLink="https://marcemrze24.github.io/proyecto-final-mercado/"
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <PortfolioCard
                        title="MarceGPT-3.5"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque porro, optio consequatur rem corporis est assumenda sint non beatae dolorem blanditiis similique nesciunt adipisci error quidem voluptas et cupiditate voluptatum?"
                        image={marcegpt}
                        codeLink="https://github.com/marcemrze24/chatgpt-clone"
                        demoLink="https://marce-gpt.vercel.app/"
                    />
                </GridItem>
            </SimpleGrid>
        </Flex>
    );
}

export default Projects;

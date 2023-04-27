import {
    Flex,
    GridItem,
    Heading,
    SimpleGrid,
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Show,
    useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineSend } from "react-icons/ai";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
    const center = useMemo(() => ({
        lat: -34.6829916137803,
        lng: -58.526398402944686,
    }));
    return (
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerStyle={{ width: "100%", height: "100%" }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
}

function Contact() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <Flex
            paddingTop={14}
            flexDirection="column"
            gap={14}
            textAlign="center"
            w="full"
        >
            <Heading
                size="2xl"
                color={useColorModeValue("blue.500", "teal.200")}
            >
                Contact
            </Heading>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                rowGap={12}
                px={8}
                columnGap={12}
            >
                <GridItem colSpan={2}>
                    <Flex flexDir="column" alignItems="center" gap={4}>
                        <Box
                            w="80px"
                            h="80px"
                            borderRadius="full"
                            overflow="hidden"
                            border="1px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <EmailIcon
                                w={12}
                                h={12}
                                color={useColorModeValue("blue.600", "white")}
                            />
                        </Box>
                        <Text>mercadomarcelo2@hotmail.com</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        action="https://formsubmit.co/mercadomarcelo2@hotmail.com"
                        method="POST"
                    >
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input type="text" name="fullName" />
                        </FormControl>
                        <input
                            type="hidden"
                            name="_subject"
                            value="Oferta laboral!"
                        ></input>
                        <FormControl isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input type="email" name="email" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Subject</FormLabel>
                            <Input type="text" name="subject" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Message:</FormLabel>
                            <Textarea name="message" />
                        </FormControl>
                        <Button
                            type="submit"
                            rightIcon={<AiOutlineSend />}
                            colorScheme="teal"
                        >
                            Submit
                        </Button>
                    </form>
                </GridItem>
                <GridItem colSpan={1}>
                    <Show above="md">
                        <Map />
                    </Show>
                </GridItem>
            </SimpleGrid>
        </Flex>
    );
}

export default Contact;

import { Container, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function HomePage() {
    return (
        <Container maxW={{ base: "container.md", lg: "container.lg" }} p={0}>
            {/* Navbar */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="fixed"
                top={0}
                p={{ base: 2, sm: 4, md: 5 }}
                w="100%"
                maxW={{ base: "container.md", lg: "container.lg" }}
                zIndex={2}
                backdropFilter="blur(10px)"
            >
                <Navbar />
            </Box>
            {/* Header */}
            <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent={{ base: "stretch", lg: "center" }}
                px={{ base: 2, md: 28, lg: 6, xl: 0 }}
                py={{ base: 14, md: 14 }}
                h="100vh"
                id="header"
            >
                <Header />
            </Box>
            {/* About */}
            <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                px={{ base: 2, md: 28, lg: 6 }}
                py={14}
                h={{ base: "100%", md: "100vh" }}
                id="about"
            >
                <About />
            </Box>
            {/* Projects */}
            <Box
                px={2}
                display="flex"
                flexDir="column"
                alignItems="center"
                py={14}
                h="100%"
                id="projects"
            >
                <Projects />
            </Box>
            {/* Contact */}
            <Box
                px={2}
                display="flex"
                flexDir="column"
                alignItems="center"
                py={14}
                h="100vh"
                id="contact"
            >
                <Contact />
            </Box>
        </Container>
    );
}

export default HomePage;

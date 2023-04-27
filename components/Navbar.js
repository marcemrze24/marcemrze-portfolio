import {
    Heading,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    Show,
    useColorMode,
    useColorModeValue,
    Hide,
} from "@chakra-ui/react";
import { SunIcon, HamburgerIcon, MoonIcon } from "@chakra-ui/icons";

function Navbar() {
    const { toggleColorMode } = useColorMode();
    return (
        <>
            <Heading
                size="lg"
                cursor="pointer"
                color={useColorModeValue("blue.500", "white")}
                letterSpacing={1}
            >
                Marce.dev
            </Heading>
            <Flex gap={{ lg: 10 }}>
                <IconButton
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    colorScheme={useColorModeValue("purple", "orange")}
                    onClick={toggleColorMode}
                />
                <Hide above="lg">
                    <Menu closeOnBlur closeOnSelect>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem as="a" href="#header">
                                Home
                            </MenuItem>
                            <MenuItem as="a" href="#about">
                                About
                            </MenuItem>
                            <MenuItem as="a" href="#projects">
                                Projects
                            </MenuItem>
                            <MenuItem as="a" href="#contact">
                                Contact
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Hide>
                <Show above="lg">
                    <Flex alignItems="center" w="auto" gap={12}>
                        <Link href="#header">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contact">Contact</Link>
                    </Flex>
                </Show>
            </Flex>
        </>
    );
}

export default Navbar;

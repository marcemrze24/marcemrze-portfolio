import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Head>
                <title>🇦🇷 Marce.dev</title>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;

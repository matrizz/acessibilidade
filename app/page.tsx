import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./components/content/main";
import { Header } from "./components/header/header";
// import { MenuBar } from "./components/menu-bar";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="w-full h-full  ">
        {/* <MenuBar /> */}
        <Header />
        <Main />
      </div>
    </ChakraProvider>
  );
}

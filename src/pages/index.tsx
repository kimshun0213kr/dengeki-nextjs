import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Center } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Center>
        <Box bg={"#00bfff"} w={"50%"}>
          <h1>私の名前はベレトです。</h1>
        </Box>
      </Center>
    </>
  );
}

import React, { useState } from "react";
import { Box, Button, Flex, Select, VStack } from "@chakra-ui/react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [userSchool, setUserSchool] = useState("");
  const [userIsStudent, setUserIsStudent] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("追加中");
    try {
      const body = {
        userName,
        userSchool,
        userIsStudent,
      };
      await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
    alert("追加しました。");
  };
  return (
    <>
      <h1>メンバー追加ページ</h1>
      <Flex p={"10"}>
        <Box>
          <VStack>
            <p>名前を入力</p>
            <textarea
              placeholder="名前を入力"
              onChange={(e) => setUserName(e.target.value)}
            ></textarea>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <p>学校名を入力</p>
            <textarea
              placeholder="学校名を入力"
              onChange={(e) => setUserSchool(e.target.value)}
            ></textarea>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <p>学生か否か</p>
            <Select onChange={(e) => setUserIsStudent(!userIsStudent)}>
              <option value="true">TRUE</option>
              <option value="false" selected>
                FALSE
              </option>
            </Select>
          </VStack>
        </Box>
      </Flex>
      <Button onClick={submitData}>CREATE</Button>
    </>
  );
}

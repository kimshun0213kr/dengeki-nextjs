import { Button, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { UseLoginState } from "@/hooks/LoginState";

export default function Main() {
  const [InputId, setInputId] = useState("");
  const [InputPass, setInputPass] = useState("");
  const [isAdmin, isUser, userName, setIsLogin, setLogout] =
    UseLoginState(false);

  function login() {
    setIsLogin(InputId, InputPass);
  }
  return (
    <>
      <HStack>
        <VStack>
          <p>IDを入力</p>
          <input
            placeholder="IDを入力"
            onChange={(e) => setInputId(e.target.value)}
          />
        </VStack>
        <VStack>
          <p>パスワードを入力</p>
          <input
            placeholder="パスワードを入力"
            onChange={(e) => setInputPass(e.target.value)}
            type="password"
          />
        </VStack>
      </HStack>
      {isAdmin || isUser ? (
        <>
          <h1>{userName}としてログイン済み</h1>
          <Button onClick={setLogout}>ログアウト</Button>
        </>
      ) : (
        <Button onClick={login}>ログイン</Button>
      )}
    </>
  );
}

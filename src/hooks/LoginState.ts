import { useCallback, useEffect, useState } from "react";
import { createHash } from "crypto";

const STORAGE_TOKEN = "storage_token";
const STORAGE_NAME = "storage_name";
const admin_id = process.env.NEXT_PUBLIC_ADMIN_ID;
const admin_password = process.env.NEXT_PUBLIC_ADMIN_PASS;
const user_id = process.env.NEXT_PUBLIC_USER_ID;
const user_password = process.env.NEXT_PUBLIC_USER_PASS;

export function UseLoginState(
  defaultValue: boolean
): [
  isAdmin: boolean,
  isUser: boolean,
  userNAme: string,
  Login: (ID: string, TOKEN: string) => void,
  Logout: () => void
] {
  const [isAdminInternal, setIsAdminInternal] = useState(defaultValue);
  const [isUserInternal, setIsUserInternal] = useState(defaultValue);
  const [userName, setUserName] = useState("");

  const encryptSha256 = (str: string) => {
    const hash = createHash("sha256");
    hash.update(str);
    return hash.digest().toString("base64");
  };

  useEffect(() => {
    setIsAdminInternal(localStorage.getItem(STORAGE_TOKEN) == admin_password);
    if (localStorage.getItem(STORAGE_TOKEN) == admin_password) {
      setUserName("admin");
    }
    setIsUserInternal(localStorage.getItem(STORAGE_TOKEN) == user_password);
    if (localStorage.getItem(STORAGE_TOKEN) == user_password) {
      setUserName("user");
    }
  }, [setIsAdminInternal, setIsUserInternal]);

  const Login = useCallback(
    (id: string, pass: string) => {
      const hashpass = encryptSha256(pass);
      if (id == admin_id && hashpass == admin_password) {
        localStorage.setItem(STORAGE_TOKEN, pass);
        setIsAdminInternal(true);
        setUserName("admin");
        localStorage.setItem(STORAGE_NAME, "admin");
      } else if (id == user_id && hashpass == user_password) {
        localStorage.setItem(STORAGE_TOKEN, pass);
        setIsUserInternal(true);
        setUserName("user");
        localStorage.setItem(STORAGE_NAME, "user");
      } else {
        alert("IDまたはPASSWORDが異なります。");
      }
    },
    [setIsAdminInternal, setIsUserInternal]
  );
  const Logout = useCallback(() => {
    localStorage.removeItem(STORAGE_TOKEN);
    setIsAdminInternal(false);
    setIsUserInternal(false);
  }, [setIsAdminInternal, setIsUserInternal]);
  return [isAdminInternal, isUserInternal, userName, Login, Logout];
}

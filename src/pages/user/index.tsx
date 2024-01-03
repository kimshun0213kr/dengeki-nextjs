import React from "react";
import { GetStaticProps } from "next";
import User, { UserProps } from "../../../components/user";
import prisma from "@/lib/prisma";
import { Box } from "@chakra-ui/react";

type Props = {
  feed: UserProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.user.findMany({
    where: {},
  });
  return {
    props: { feed },
  };
};

const Main: React.FC<Props> = (props) => {
  return (
    <>
      <Box>
        {props.feed.map((user) => (
          <Box key={user.id}>
            <User user={user} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Main;

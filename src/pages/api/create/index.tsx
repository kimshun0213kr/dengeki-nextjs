import prisma from "@/lib/prisma";

export default async function handle(
  req: {
    body: {
      userName: string;
      userSchool: string;
      userIsStudent: boolean;
    };
  },
  res: {
    json: (arg0: {
      id: number;
      name: string;
      school: string;
      isStudent: boolean;
    }) => void;
  }
) {
  const { userName, userSchool, userIsStudent } = req.body;
  const result = await prisma.user.create({
    data: {
      name: userName,
      school: userSchool,
      isStudent: userIsStudent,
    },
  });
  res.json(result);
}

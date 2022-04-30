import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.create({
  data: {
    name: "Madang",
    email: "aaa@gmail.com",
  },
});

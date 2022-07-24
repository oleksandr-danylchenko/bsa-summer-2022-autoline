import { prisma } from '@data/prisma-client';
import { Prisma, User } from '@prisma/client';
import { hash as argonHash } from 'argon2';

const createUser = async (user: Prisma.UserCreateInput): Promise<User> => {
  const { password, ...userData } = user;

  const hashedPassword = await argonHash(password);

  try {
    return await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email',
        );
      }
    }
  }
};

export { createUser };

// Import the Prisma Client
import { PrismaClient } from '@prisma/client';

// Instantiate it
const prisma = new PrismaClient();

// Function to create a new user

export default class userAuthDbServices {

  static async getByUserId(userId) {
    const user = await prisma.user.findUnique({
      where: {
        user_id: userId
      }
    });
    
    return user
  }
  
}
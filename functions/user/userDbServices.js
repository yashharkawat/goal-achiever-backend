// Import the Prisma Client
import { PrismaClient } from '@prisma/client';

// Instantiate it
const prisma = new PrismaClient();

// Function to create a new user

export default class userDbServices {
  static async createUser(data) {
    const user = await prisma.user.create({data});
    
    return user
  }

  static async getUsers() {
    const users = await prisma.user.findMany();
    
    return users
  }

  static async getByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: {
        phone
      }
    });
    
    return user
  }
  
}
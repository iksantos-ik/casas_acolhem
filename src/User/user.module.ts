import { Module } from '@nestjs/common';
import { UserController } from './usercontroller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { PrismaModule } from 'src/Prisma/prisma.module';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserController } from './usercontroller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { ShelterModule } from './Shelter/shelter.module';
import { UserModule } from './User/user.module';
import { PrismaModule } from './Prisma/prisma.module';

@Module({
  imports: [PrismaModule, ShelterModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

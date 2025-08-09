import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import { ShelterService } from './shelter.service';
import { ShelterRepository } from './shelter.repository';
import { PrismaService } from 'src/Prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ShelterController],
  providers: [ShelterService, ShelterRepository, PrismaService],
})
export class ShelterModule {}

import { PrismaClient, UserType, ServiceArea } from "@prisma/client";
import { UserInputDto } from "./DTO/user_input_dto";
import { UserUpdateDto } from "./DTO/user_update_dto";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { async } from "rxjs";

type UserTypeEnum = UserType;
type ServiceAreaEnum = ServiceArea;

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(
    User: UserInputDto
  ) {
    console.log(typeof User.fullName, User.fullName);
    return this.prisma.user.create({
      data: {
        fullName: User.fullName,
        document: User.document,
        address: User.address,
        district: User.district,
        city: User.city,
        email: User.email,
        phone: User.phone,
        userTypes: User.userTypes as UserTypeEnum,
        hasExperienceWithTargetAudience: User.hasExperienceWithTargetAudience,
        userServiceArea: User.userServiceArea as ServiceAreaEnum // único valor
      },
    });
  }

  async updateUser(
    id: string,
    User: UserUpdateDto
  ){
    const existing = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!existing) throw new Error('Usuário não encontrado');

    // atualiza e puxa os dados existentes
    const allowedFields = [
      'fullName',
      'document',
      'address',
      'district',
      'city',
      'email',
      'phone',
      'userTypes',
      'hasExperienceWithTargetAudience',
      'userServiceArea',
    ];
    const userData: any = {};
    for (const key of allowedFields) {
      userData[key] = User[key] !== undefined ? User[key] : existing[key];
    }

    
    return this.prisma.user.update({
      where: { id },
      data: {
        ...userData,
        userTypes: User.userTypes as UserTypeEnum,
        userServiceArea: User.userServiceArea as ServiceAreaEnum
      }
    });
  }

  async deleteUser(id: string): Promise<any> {
    return this.prisma.user.delete({ where: { id } });
  }

  async getUserById(id: string): Promise<any> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUsers(): Promise<any[]> {
    return this.prisma.user.findMany();
  }
}



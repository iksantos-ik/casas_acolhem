import { PrismaClient, UserType, ServiceArea } from "@prisma/client";
import { UserInputDto } from "./DTO/user_input_dto";
import { UserUpdateDto } from "./DTO/user_update_dto";

type UserTypeEnum = UserType;
type ServiceAreaEnum = ServiceArea;

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async createUser(
    User: UserInputDto
  ) {
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
    User: UserUpdateDto
  ) {
    return this.prisma.user.update({
      where: { id: User.id },
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

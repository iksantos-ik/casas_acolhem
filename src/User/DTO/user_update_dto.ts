import { ServiceArea } from "@prisma/client";
import { UserType } from "../Enum/userType_enum";

export class UserUpdateDto {
    id?: string;
    fullName?: string;
    document?: string;
    address?: string;
    district?: string;
    city?: string;
    email?: string;
    phone?: string;
    userTypes?: UserType;
    hasExperienceWithTargetAudience?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    userServiceArea?: ServiceArea;
}

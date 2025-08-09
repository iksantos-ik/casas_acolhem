import { ServiceArea } from "../Enum/serviceArea_enum";
import { UserType } from "../Enum/userType_enum";

export class UserOutputDto {
    id: string;
    fullName: string;
    document: string;
    address: string;
    district: string;
    city: string;
    email: string;
    phone: string;
    userTypes: UserType;
    hasExperienceWithTargetAudience: boolean;
    createdAt: Date;
    updatedAt: Date;
    userServiceArea: ServiceArea;
}

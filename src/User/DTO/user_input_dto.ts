import { ServiceArea } from "../Enum/serviceArea_enum";
import { UserType } from "../Enum/userType_enum";

export class UserInputDto {
    fullName: string;
    document: string;
    address: string;
    district: string;
    city: string;
    email: string;
    phone: string;
    userTypes: UserType;
    hasExperienceWithTargetAudience: boolean;
    userServiceArea: ServiceArea;
}

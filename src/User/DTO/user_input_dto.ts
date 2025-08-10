import { IsCpf } from "src/Validators/is-cpf_decorator";
import { ServiceArea } from "../Enum/serviceArea_enum";
import { UserType } from "../Enum/userType_enum";
import { IsBoolean, IsEnum, IsString } from "class-validator";

export class UserInputDto {

    @IsString()
    fullName: string;

    @IsCpf({message: 'CPF inválido'})
    document: string;

    @IsString()
    address: string;

    @IsString()
    district: string;

    @IsString()
    city: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsEnum(UserType)
    userTypes: UserType;

    @IsBoolean()
    hasExperienceWithTargetAudience: boolean;

    @IsEnum(ServiceArea)
    userServiceArea: ServiceArea;
}

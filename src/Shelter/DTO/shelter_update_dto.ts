import { DocumentEntity } from "../entity/document_entity";
import { Gender } from "../enums/gender.enum";


export class ShelterUpdateDto {
    id?: string;
    name?: string;
    capacity?: number;
    mainNeeds?: string;
    foundationDate?: Date;
    addressId?: string;
    operatingSince?: number;
    currentResidents?: number;
    description?: string;
    targetGender?: Gender;
    documents?: DocumentEntity[];
    createdAt?: Date;
    updatedAt?: Date;    
    responsibleName?: string;
    responsiblePhone?: string;
}


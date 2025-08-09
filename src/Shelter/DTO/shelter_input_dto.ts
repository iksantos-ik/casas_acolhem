import { DocumentEntity } from "../entity/document_entity";
import { Gender } from "../enums/gender.enum";

export class ShelterInputDto {
    name: string;
    capacity: number;
    mainNeeds: string;
    foundationDate: Date;
    description: string;
    addressId: string;
    operatingSince: number;
    currentResidents: number;
    targetGender: Gender;
    responsibleName: string;
    responsiblePhone: string;
    documents: DocumentEntity[];    
}

import { Gender } from "../enums/gender.enum";
import { AddressEntity } from "./address_entity";
import { DocumentEntity } from "./document_entity";


export class ShelterEntity {
    id: string;
    capacity: number;
    mainNeeds: string;
    foundationDate: Date;
    address: AddressEntity;
    operatingSince: number;
    currentResidents: number;
    targetGender: Gender;
    documents: DocumentEntity[];
    createdAt: Date;
    updatedAt: Date;
    responsibleName: string;
    responsiblePhone: string;
}

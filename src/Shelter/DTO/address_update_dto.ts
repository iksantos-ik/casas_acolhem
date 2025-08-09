import { DocumentEntity } from "../entity/document_entity";
import { Gender } from "../enums/gender.enum";


export class AddressUpdateDto {
    id?: string;
    zipCode?: string;
    street?: string;
    number?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    complement?: string;
}


import { DocumentEntity } from "../entity/document_entity";
import { Gender } from "../enums/gender.enum";


export class DocumentUpdateDto {
    id?: string;
    documentName?: string;
    shelterId?: string;
    url?: string;
    uploadedAt?: Date;
}


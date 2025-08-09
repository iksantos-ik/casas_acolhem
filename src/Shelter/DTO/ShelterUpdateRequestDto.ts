import { AddressUpdateDto } from "./address_update_dto";
import { DocumentUpdateDto } from "./document_update_dto";
import { ShelterUpdateDto } from "./shelter_update_dto";


export class ShelterUpdateRequestDto {
    shelter: ShelterUpdateDto;
    address?: AddressUpdateDto;
    document?: DocumentUpdateDto;
  }
  
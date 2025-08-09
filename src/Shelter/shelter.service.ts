import { Injectable } from '@nestjs/common';
import { ShelterRepository } from './shelter.repository';
import { ShelterInputDto } from './DTO/shelter_input_dto';
import { AddressInputDto } from './DTO/address_input_dto';
import { DocumentInputDto } from './DTO/document_input_dto';
import { ShelterUpdateDto } from './DTO/shelter_update_dto';
import { AddressUpdateDto } from './DTO/address_update_dto';
import { DocumentUpdateDto } from './DTO/document_update_dto';

@Injectable()
export class ShelterService {
  constructor(private readonly shelterRepository: ShelterRepository) {

  }

  async criaShelter(
    Shelter: ShelterInputDto, 
    Address: AddressInputDto, 
    Document: DocumentInputDto
  ) {
    return await this.shelterRepository.createShelter(Shelter, Address, Document)
  }

  async pegaShelterById(id: string) {
    return await this.shelterRepository.getShelterById(id)
  }

  async pegaTodosShelters() {
    return await this.shelterRepository.getAllShelters()
  }

  async editShelter(
    id: string,
    Shelter: ShelterUpdateDto, 
    Address?: AddressUpdateDto, 
    Document?: DocumentUpdateDto
  ) {
    return await this.shelterRepository.updateShelter(id, Shelter, Address, Document)
  }

  async excluiShelter(id: string) {
    return await this.shelterRepository.deleteShelter(id)
  }

}

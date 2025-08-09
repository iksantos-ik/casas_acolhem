import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterInputDto } from './DTO/shelter_input_dto';
import { AddressInputDto } from './DTO/address_input_dto';
import { DocumentInputDto } from './DTO/document_input_dto';
import { ShelterUpdateDto } from './DTO/shelter_update_dto';
import { AddressUpdateDto } from './DTO/address_update_dto';
import { DocumentUpdateDto } from './DTO/document_update_dto';
import { ShelterUpdateRequestDto } from './DTO/ShelterUpdateRequestDto';

@Controller('shelters')
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}

  @Post()
  async criaShelter(
    @Body() shelter: ShelterInputDto,
    @Body() address: AddressInputDto,
    @Body() document: DocumentInputDto
  ) {
    return await this.shelterService.criaShelter(shelter, address, document);
  }

  @Get()
    async pegaTodosShelters() {
      return await this.shelterService.pegaTodosShelters();
  }

  @Get(':id')
    async pegaShelterById(@Param('id') id: string) {
      return await this.shelterService.pegaShelterById(id);
  }

  @Put(':id')
    async editaShelter(
      @Param('id') id: string,
      @Body() body: ShelterUpdateRequestDto
    ) {
      return await this.shelterService.editShelter(
        id,
        body.shelter,
        body.address,
        body.document
      );
    }


  @Delete(':id')
  async excluiShelter(@Param('id') id: string) {
    return await this.shelterService.excluiShelter(id);
  }

}

// import { Prisma, PrismaClient } from "generated/prisma";
import { ShelterInputDto } from "./DTO/shelter_input_dto";
import { AddressInputDto } from "./DTO/address_input_dto";
import { DocumentInputDto } from "./DTO/document_input_dto";
import { ShelterUpdateDto } from "./DTO/shelter_update_dto";
import { AddressUpdateDto } from "./DTO/address_update_dto";
import { DocumentUpdateDto } from "./DTO/document_update_dto";
import { Gender, Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";

// Alias for Prisma enum type so we can cast values coming from our DTO enum (top-level Prisma.Gender)
type GenderEnum = Gender;

@Injectable()
export class ShelterRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createShelter(
        Shelter: ShelterInputDto, 
        Address: AddressInputDto, 
        Document: DocumentInputDto
    ) {
        return await this.prisma.shelter.create({
            data: {
                name: Shelter.name,
                capacity: Shelter.capacity,
                mainNeeds: Shelter.mainNeeds,
                foundationDate: Shelter.foundationDate,
                description: Shelter.description,
                addresses: {
                    create: {
                        zipCode: Address.zipCode,
                        street: Address.street,
                        number: Address.number,
                        neighborhood: Address.neighborhood,
                        city: Address.city,
                        state: Address.state,
                        complement: Address.complement
                    }
                },
                operatingSince: Shelter.operatingSince,
                currentResidents: Shelter.currentResidents,
                targetGender: Shelter.targetGender as GenderEnum,
                responsibleName: Shelter.responsibleName,
                responsiblePhone: Shelter.responsiblePhone,
                documents: {
                    create: {
                        documentName: Document.documentName,
                        url: Document.url
                    }
                }
            },
            include: {
                addresses: true,
                documents: true
            }
        })
    }

    async getShelterById(id: string) {
        return await this.prisma.shelter.findUnique({
            where: {
                id: id
            },
            include: {
                addresses: true,
                documents: true
            }
        })
    }
    async getAllShelters() {
        return await this.prisma.shelter.findMany({
            include: {
                addresses: true,
                documents: true
            }
        })
    }

    async updateShelter(
      id: string,
      shelterDto: ShelterUpdateDto,
      addressDto?: AddressUpdateDto,
      documentDto?: DocumentUpdateDto,
    ) {
      const existing = await this.prisma.shelter.findUnique({
        where: { id },
        include: { addresses: true, documents: true },
      });
    
      if (!existing) throw new Error('Shelter não encontrado');
    
      // Campos simples que podem ser atualizados direto
      const allowedFields = [
        'name',
        'capacity',
        'mainNeeds',
        'foundationDate',
        'description',
        'operatingSince',
        'currentResidents',
        'targetGender',
        'responsibleName',
        'responsiblePhone',
      ];
    
      // Monta o objeto filtrado mesclando dados existentes com novos (prioriza o que veio no shelterDto)
      const shelterData: any = {};
      for (const key of allowedFields) {
        shelterData[key] = shelterDto[key] !== undefined ? shelterDto[key] : existing[key];
      }
    
      // Atualiza relacionamento endereço se fornecido
      if (existing.addresses.length && addressDto && Object.keys(addressDto).length) {
        shelterData.addresses = {
          update: {
            where: { id: existing.addresses[0].id },
            data: Object.fromEntries(
              Object.entries(addressDto).filter(([, v]) => v !== undefined)
            ),
          },
        };
      }
    
      // Atualiza relacionamento documento se fornecido
      if (existing.documents.length && documentDto && Object.keys(documentDto).length) {
        shelterData.documents = {
          update: {
            where: { id: existing.documents[0].id },
            data: Object.fromEntries(
              Object.entries(documentDto).filter(([, v]) => v !== undefined)
            ),
          },
        };
      }
    
      // Atualiza no banco
      return this.prisma.shelter.update({
        where: { id },
        data: shelterData,
        include: { addresses: true, documents: true },
      });
    }
    
    
    
    async deleteShelter(id: string) {
        return await this.prisma.shelter.delete({
            where: {
                id: id
            }
        })
    }
 

}
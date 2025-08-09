import { PrismaClient, UserType, Gender, ServiceArea } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // cria usuario admin
    const user = await prisma.user.create({
      data: {
        fullName: "João da Silva",
        document: "12345678900",
        address: "Rua das Flores",
        district: "Centro",
        city: "São Paulo",
        email: "joao@example.com",
        phone: "11999999999",
        userTypes: UserType.VOLUNTEER,
        hasExperienceWithTargetAudience: true,
        userServiceArea: ServiceArea.ESPORTE // enum único, sem array
      },
    });

    // cria abrigo
    const shelter = await prisma.shelter.create({
        data: {
          name: 'Casa Acolhedora',
          capacity: 25,
          mainNeeds: 'Alimentos e roupas',
          foundationDate: new Date('2010-01-01'),
          description: 'Casa de recuperação para viciados.',
          operatingSince: 2010,
          currentResidents: 18,
          targetGender: Gender.MIXED,
          responsibleName: 'Maria Silva',
          responsiblePhone: '11999999999',
          addresses: {
            create: {
              zipCode: '50000-000',
              street: 'Rua Esperança',
              number: '123',
              neighborhood: 'Boa Vista',
              city: 'Recife',
              state: 'PE',
              complement: 'Próximo à praça central',
            },
          },
          documents: {
            create: {
              documentName: 'CNPJ',
              url: '/uploads/documentos/cnpj_casa_acolhedora.pdf',
            },
          },
        },
    });

    console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Erro na seed:', e);
    await prisma.$disconnect();
    process.exit(1);
});

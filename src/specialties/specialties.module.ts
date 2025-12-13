import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialtiesControllerV1 } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';
import { Specialtie, SpecialtieSchema } from './schemas/specialtie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Specialtie.name, schema: SpecialtieSchema },
    ]),
  ],
  controllers: [SpecialtiesControllerV1],
  providers: [SpecialtiesService],
})
export class SpecialtiesModule {}

import { Body, Controller, Get, Param } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { Specialtie } from './schemas/specialtie.schema';

@Controller({
  path: 'specialties',
  version: '1',
})
export class SpecialtiesControllerV1 {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Get()
  async findAll(): Promise<Specialtie[]> {
    return this.specialtiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Specialtie | null> {
    return this.specialtiesService.findOne(id);
  }
}

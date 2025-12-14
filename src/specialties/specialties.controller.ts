import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { Specialtie } from './schemas/specialtie.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({
  path: 'specialties',
  version: '1',
})
export class SpecialtiesControllerV1 {
  constructor(private readonly specialtiesService: SpecialtiesService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Specialtie[]> {
    return this.specialtiesService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Specialtie | null> {
    return this.specialtiesService.findOne(id);
  }
}

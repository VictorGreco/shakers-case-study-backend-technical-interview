import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtieDto } from './dto/create-specialtie.dto';
import { UpdateSpecialtieDto } from './dto/update-specialtie.dto';
import { Specialtie } from './schemas/specialtie.schema';

@Controller({
  path: 'specialties',
  version: '1',
})
export class SpecialtiesControllerV1 {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Post()
  async create(@Body() createSpecialtieDto: CreateSpecialtieDto) {
    return this.specialtiesService.create(createSpecialtieDto);
  }

  @Get()
  async findAll(): Promise<Specialtie[]> {
    return this.specialtiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Specialtie | null> {
    return this.specialtiesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSpecialtieDto: UpdateSpecialtieDto,
  ) {
    return this.specialtiesService.update(id, updateSpecialtieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.specialtiesService.delete(id);
  }
}

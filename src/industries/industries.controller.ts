import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IndustriesService } from './industries.service';
import { CreateIndustrieDto } from './dto/create-industrie.dto';
import { UpdateIndustrieDto } from './dto/update-industrie.dto';
import { Industrie } from './schemas/industrie.schema';

@Controller({
  path: 'industries',
  version: '1',
})
export class IndustriesControllerV1 {
  constructor(private readonly industriesService: IndustriesService) {}

  @Post()
  async create(@Body() createIndustrieDto: CreateIndustrieDto) {
    return this.industriesService.create(createIndustrieDto);
  }

  @Get()
  async findAll(): Promise<Industrie[]> {
    return this.industriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Industrie | null> {
    return this.industriesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateIndustrieDto: UpdateIndustrieDto,
  ) {
    return this.industriesService.update(id, updateIndustrieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.industriesService.delete(id);
  }
}

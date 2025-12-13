import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';
import { Subcategorie } from './schemas/subcategorie.schema';

@Controller({
  path: 'subcategories',
  version: '1',
})
export class SubcategoriesControllerV1 {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  async create(@Body() createSubcategorieDto: CreateSubcategorieDto) {
    return this.subcategoriesService.create(createSubcategorieDto);
  }

  @Get()
  async findAll(): Promise<Subcategorie[]> {
    return this.subcategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Subcategorie | null> {
    return this.subcategoriesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSubcategorieDto: UpdateSubcategorieDto,
  ) {
    return this.subcategoriesService.update(id, updateSubcategorieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.subcategoriesService.delete(id);
  }
}

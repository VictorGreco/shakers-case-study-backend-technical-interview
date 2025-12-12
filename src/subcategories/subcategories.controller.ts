import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';
import { Subcategorie } from './schemas/subcategorie.schema';

@Controller('subcategories')
export class SubcategoriesController {
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
  async findOne(@Param('id') id: string): Promise<Subcategorie | null> {
    return this.subcategoriesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubcategorieDto: UpdateSubcategorieDto,
  ) {
    return this.subcategoriesService.update(id, updateSubcategorieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.subcategoriesService.delete(id);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './schemas/categorie.schema';

@Controller({
  path: 'categories',
  version: '1',
})
export class CategoriesControllerV1 {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategorieDto: CreateCategorieDto) {
    return this.categoriesService.create(createCategorieDto);
  }

  @Get()
  async findAll(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Categorie | null> {
    return this.categoriesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategorieDto: UpdateCategorieDto,
  ) {
    return this.categoriesService.update(id, updateCategorieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}

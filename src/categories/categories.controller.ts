import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './schemas/categorie.schema';

@Controller('categories')
export class CategoriesController {
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
  async findOne(@Param('id') id: string): Promise<Categorie | null> {
    return this.categoriesService.findOne(id);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategorieDto: UpdateCategorieDto,
  ) {
    return this.categoriesService.update(id, updateCategorieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }
}

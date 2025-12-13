import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

import { Categorie } from './schemas/categorie.schema';

@Controller({
  path: 'categories',
  version: '1',
})
export class CategoriesControllerV1 {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Categorie | null> {
    return this.categoriesService.findOne(id);
  }
}

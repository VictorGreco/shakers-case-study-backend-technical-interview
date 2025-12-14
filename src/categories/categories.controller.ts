import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';

import { Categorie } from './schemas/categorie.schema';
import { AuthGuard } from '../auth/auth.guard';

@Controller({
  path: 'categories',
  version: '1',
})
export class CategoriesControllerV1 {
  constructor(private readonly categoriesService: CategoriesService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Categorie | null> {
    return this.categoriesService.findOne(id);
  }
}

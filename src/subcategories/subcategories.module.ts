import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategoriesController } from './subcategories.controller';
import { SubcategoriesService } from './subcategories.service';
import {
  Subcategorie,
  SubcategorieSchema,
} from './schemas/subcategorie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subcategorie.name, schema: SubcategorieSchema },
    ]),
  ],
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService],
})
export class SubcategoriesModule {}

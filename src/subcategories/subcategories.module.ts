import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategoriesControllerV1 } from './subcategories.controller';
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
  controllers: [SubcategoriesControllerV1],
  providers: [SubcategoriesService],
})
export class SubcategoriesModule {}

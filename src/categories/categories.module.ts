import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesControllerV1 } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Categorie, CategorieSchema } from './schemas/categorie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categorie.name, schema: CategorieSchema },
    ]),
  ],
  controllers: [CategoriesControllerV1],
  providers: [CategoriesService],
})
export class CategoriesModule {}

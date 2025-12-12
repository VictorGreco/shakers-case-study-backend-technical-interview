import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './schemas/categorie.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categorie.name)
    private readonly categorieModel: Model<Categorie>,
  ) {}

  async create(createCategorieDto: CreateCategorieDto): Promise<Categorie> {
    const createdCategorie =
      await this.categorieModel.create(createCategorieDto);
    return createdCategorie;
  }

  async findAll(): Promise<Categorie[]> {
    return this.categorieModel.find().exec();
  }

  async findOne(id: string): Promise<Categorie | null> {
    return this.categorieModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateCategorieDto: UpdateCategorieDto,
  ): Promise<Categorie | null> {
    return this.categorieModel
      .findByIdAndUpdate({ _id: id }, updateCategorieDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Categorie | null> {
    const deletedCategorie = await this.categorieModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedCategorie;
  }
}

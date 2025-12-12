import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';
import { Subcategorie } from './schemas/subcategorie.schema';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectModel(Subcategorie.name)
    private readonly categorieModel: Model<Subcategorie>,
  ) {}

  async create(
    createSubcategorieDto: CreateSubcategorieDto,
  ): Promise<Subcategorie> {
    const createdCategorie = await this.categorieModel.create(
      createSubcategorieDto,
    );
    return createdCategorie;
  }

  async findAll(): Promise<Subcategorie[]> {
    return this.categorieModel.find().exec();
  }

  async findOne(id: string): Promise<Subcategorie | null> {
    return this.categorieModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateSubcategorieDto: UpdateSubcategorieDto,
  ): Promise<Subcategorie | null> {
    return this.categorieModel
      .findByIdAndUpdate({ _id: id }, updateSubcategorieDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Subcategorie | null> {
    const deletedCategorie = await this.categorieModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedCategorie;
  }
}

import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categorie } from './schemas/categorie.schema';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    @InjectModel(Categorie.name)
    private readonly categorieModel: Model<Categorie>,
  ) {}

  async findAll(): Promise<Categorie[]> {
    this.logger.log('Called find all');

    return this.categorieModel.find().exec();
  }

  async findOne(id: number): Promise<Categorie | null> {
    this.logger.log('Called find single');

    return this.categorieModel.findOne({ id }).exec();
  }
}

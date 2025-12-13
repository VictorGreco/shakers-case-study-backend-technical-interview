import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subcategorie } from './schemas/subcategorie.schema';

@Injectable()
export class SubcategoriesService {
  private readonly logger = new Logger(SubcategoriesService.name);

  constructor(
    @InjectModel(Subcategorie.name)
    private readonly categorieModel: Model<Subcategorie>,
  ) {}

  async findAll(): Promise<Subcategorie[]> {
    this.logger.log('Called find all');

    return this.categorieModel.find().exec();
  }

  async findOne(id: number): Promise<Subcategorie | null> {
    this.logger.log('Called find single');

    return this.categorieModel.findOne({ id }).exec();
  }
}

import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Industrie } from './schemas/industrie.schema';

@Injectable()
export class IndustriesService {
  private readonly logger = new Logger(IndustriesService.name);

  constructor(
    @InjectModel(Industrie.name)
    private readonly industrieModel: Model<Industrie>,
  ) {}

  async findAll(): Promise<Industrie[]> {
    this.logger.log('Called find all');

    return this.industrieModel.find().exec();
  }

  async findOne(id: number): Promise<Industrie | null> {
    this.logger.log('Called find single');

    return this.industrieModel.findOne({ id }).exec();
  }
}

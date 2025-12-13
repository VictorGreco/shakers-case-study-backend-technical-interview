import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Specialtie } from './schemas/specialtie.schema';

@Injectable()
export class SpecialtiesService {
  private readonly logger = new Logger(SpecialtiesService.name);

  constructor(
    @InjectModel(Specialtie.name)
    private readonly specialtieModel: Model<Specialtie>,
  ) {}

  async findAll(): Promise<Specialtie[]> {
    this.logger.log('Called find all');

    return this.specialtieModel.find().exec();
  }

  async findOne(id: number): Promise<Specialtie | null> {
    this.logger.log('Called find single');

    return this.specialtieModel.findOne({ id }).exec();
  }
}

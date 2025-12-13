import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Position } from './schemas/position.schema';

@Injectable()
export class PositionsService {
  private readonly logger = new Logger(PositionsService.name);

  constructor(
    @InjectModel(Position.name)
    private readonly positionModel: Model<Position>,
  ) {}

  async findAll(): Promise<Position[]> {
    this.logger.log('Called find all');

    return this.positionModel.find().exec();
  }

  async findOne(id: number): Promise<Position | null> {
    this.logger.log('Called find single');

    return this.positionModel.findOne({ id }).exec();
  }
}

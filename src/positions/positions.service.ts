import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './schemas/position.schema';

@Injectable()
export class PositionsService {
  constructor(
    @InjectModel(Position.name)
    private readonly positionModel: Model<Position>,
  ) {}

  async create(createPositionDto: CreatePositionDto): Promise<Position> {
    const createdPosition = await this.positionModel.create(createPositionDto);
    return createdPosition;
  }

  async findAll(): Promise<Position[]> {
    return this.positionModel.find().exec();
  }

  async findOne(id: number): Promise<Position | null> {
    return this.positionModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updatePositionDto: UpdatePositionDto,
  ): Promise<Position | null> {
    return this.positionModel
      .findByIdAndUpdate({ id }, updatePositionDto, { new: true })
      .exec();
  }

  async delete(id: number): Promise<Position | null> {
    const deletedPosition = await this.positionModel
      .findByIdAndDelete({ id })
      .exec();
    return deletedPosition;
  }
}

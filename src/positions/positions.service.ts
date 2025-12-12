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

  async findOne(id: string): Promise<Position | null> {
    return this.positionModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updatePositionDto: UpdatePositionDto,
  ): Promise<Position | null> {
    return this.positionModel
      .findByIdAndUpdate({ _id: id }, updatePositionDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Position | null> {
    const deletedPosition = await this.positionModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedPosition;
  }
}

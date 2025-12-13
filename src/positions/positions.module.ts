import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PositionsControllerV1 } from './positions.controller';
import { PositionsService } from './positions.service';
import { Position, PositionSchema } from './schemas/position.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Position.name, schema: PositionSchema },
    ]),
  ],
  controllers: [PositionsControllerV1],
  providers: [PositionsService],
})
export class PositionsModule {}

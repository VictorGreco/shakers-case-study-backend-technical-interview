import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PositionDocument = HydratedDocument<Position>;

@Schema()
export class Position {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop([Number])
  skills: number[];

  @Prop([Number])
  specialties: number[];

  @Prop()
  referralBonus: number;
}

export const PositionSchema = SchemaFactory.createForClass(Position);

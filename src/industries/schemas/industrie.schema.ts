import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IndustrieDocument = HydratedDocument<Industrie>;

@Schema()
export class Industrie {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const IndustrieSchema = SchemaFactory.createForClass(Industrie);

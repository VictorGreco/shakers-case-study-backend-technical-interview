import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BudgetDocument = HydratedDocument<Budget>;

@Schema()
export class Budget {
  @Prop()
  hourFrom: number;

  @Prop()
  hourTo: number;

  @Prop()
  total: number;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);

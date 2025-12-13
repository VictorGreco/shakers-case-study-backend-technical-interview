import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Organization } from '../../organizations/schemas/organization.schema';
import { ProjectLeader } from '../../projectLeaders/schemas/projectLeader.schema';
import { Position } from '../../positions/schemas/position.schema';
import { Budget } from './budget.schema';
import { Faq } from './faqs.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],
  })
  organization: Organization;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProjectLeader' }],
  })
  projectLeader: ProjectLeader;

  @Prop()
  category: number;

  @Prop()
  subcategory: number;

  @Prop()
  startDate: string;

  @Prop({ type: Budget })
  budget: Budget;

  @Prop()
  totalHours: number;

  @Prop()
  description: string;

  @Prop([String])
  goals: string[];

  @Prop({ type: [Faq] })
  faqs: Faq[];

  @Prop()
  status: string;

  @Prop()
  creationDate: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Position' }] })
  positions: Position[];

  @Prop()
  totalApplicationsAmount: number;

  @Prop()
  publishedAt: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

import * as mongoose from 'mongoose';

import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Organization } from 'src/organizations/schemas/organization.schema';
import { ProjectLeader } from 'src/projectLeaders/schemas/projectLeader.schema';
import { Position } from 'src/positions/schemas/position.schema';

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

  @Prop(
    raw({
      hourFrom: { type: String },
      hourTo: { type: String },
      total: { type: String },
    }),
  )
  budget: Record<string, number | null>;

  @Prop()
  totalHours: number;

  @Prop()
  description: string;

  @Prop([String])
  goals: string[];

  @Prop([
    raw({
      question: { type: String },
      answer: { type: String },
    }),
  ])
  faqs: Record<string, string>[];

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

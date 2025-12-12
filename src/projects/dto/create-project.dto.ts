import { CreateOrganizationDto } from 'src/organizations/dto/create-organization.dto';
import { CreateProjectLeaderDto } from 'src/projectLeaders/dto/create-projectLeader.dto';
import { CreatePositionDto } from 'src/positions/dto/create-position.dto';

export class CreateBudgetDto {
  readonly hourFrom: number | null;
  readonly hourTo: number | null;
  readonly total: number | null;
}

export class CreateFaqsDto {
  readonly question: string;
  readonly answer: string;
}

export class CreateProjectDto {
  readonly id: number;
  readonly title: string;
  readonly organization: CreateOrganizationDto;
  readonly projectLeader: CreateProjectLeaderDto;
  readonly category: number;
  readonly subcategory: number;
  readonly startDate: string;
  readonly budget: CreateBudgetDto;
  readonly totalHours: number;
  readonly description: string;
  readonly goals: string[];
  readonly faqs: CreateFaqsDto[];
  readonly status: string;
  readonly creationDate: string;
  readonly positions: CreatePositionDto[];
  readonly totalApplicationsAmount: number;
  readonly publishedAt: string;
}

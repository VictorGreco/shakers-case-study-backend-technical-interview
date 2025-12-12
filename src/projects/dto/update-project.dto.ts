import { UpdateOrganizationDto } from 'src/organizations/dto/update-organization.dto';
import { UpdateProjectLeaderDto } from 'src/projectLeaders/dto/update-projectLeader.dto';
import { UpdatePositionDto } from 'src/positions/dto/update-position.dto';

export class UpdateBudgetDto {
  readonly hourFrom?: number | null;
  readonly hourTo?: number | null;
  readonly total?: number | null;
}

export class UpdateFaqsDto {
  readonly question?: string;
  readonly answer?: string;
}

export class UpdateProjectDto {
  readonly id?: number;
  readonly title?: string;
  readonly organization?: UpdateOrganizationDto;
  readonly projectLeader?: UpdateProjectLeaderDto;
  readonly category?: number;
  readonly subcategory?: number;
  readonly startDate?: string;
  readonly budget?: UpdateBudgetDto;
  readonly totalHours?: number;
  readonly description?: string;
  readonly goals?: string[];
  readonly faqs?: UpdateFaqsDto[];
  readonly status?: string;
  readonly creationDate?: string;
  readonly positions?: UpdatePositionDto[];
  readonly totalApplicationsAmount?: number;
  readonly publishedAt?: string;
}

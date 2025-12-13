import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { OrganizationsModule } from '../src/organizations/organizations.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Organizations (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, OrganizationsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/organizations')
      .expect(({ body }) => {
        expect(body).toHaveLength(40);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/organizations/1')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693c15c0f4d7ef84cd6a72bb',
          id: 1,
          name: 'Rojas-Collins',
          logo: 'https://logo.clearbit.com/slack.com',
          industry: 15,
        });
      })
      .expect(HttpStatus.OK);
  });
});

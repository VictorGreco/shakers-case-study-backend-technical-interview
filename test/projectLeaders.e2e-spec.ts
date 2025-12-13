import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { ProjectLeadersModule } from '../src/projectLeaders/projectLeaders.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('ProjectLeadersModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, ProjectLeadersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/projectLeaders')
      .expect(({ body }) => {
        expect(body).toHaveLength(40);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/projectLeaders/101')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693c160ff4d7ef84cd6a72e5',
          id: 101,
          name: 'Aaron',
          lastName: 'Graves',
        });
      })
      .expect(HttpStatus.OK);
  });
});

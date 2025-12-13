import { HttpStatus, INestApplication, VersioningType } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { database, imports } from './constants';
import { SkillsModule } from '../src/skills/skills.module';

beforeAll(async () => {
  await mongoose.connect(database);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('SkillsModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...imports, SkillsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    await app.init();
  });

  it('Get all', () => {
    return request(app.getHttpServer())
      .get('/v1/skills')
      .expect(({ body }) => {
        expect(body).toHaveLength(119);
      })
      .expect(HttpStatus.OK);
  });

  it('Get one', () => {
    return request(app.getHttpServer())
      .get('/v1/skills/1')
      .expect(({ body }) => {
        expect(body).toMatchObject({
          _id: '693df77f8919dcfa71dd0773',
          id: 1,
          name: 'Python',
        });
      })
      .expect(HttpStatus.OK);
  });
});

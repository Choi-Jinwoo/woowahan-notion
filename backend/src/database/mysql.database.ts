import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Database } from './database.interface';
import { MYSQL } from '../../config';
import schema from '../schema';

export default class MySQLDatabase implements Database {
  private readonly options: MysqlConnectionOptions;

  constructor() {
    this.options = {
      type: 'mysql',
      database: MYSQL.DATABASE,
      host: MYSQL.HOST,
      port: parseInt(MYSQL.PORT, 10),
      username: MYSQL.USERNAME,
      password: MYSQL.PASSWORD,
      synchronize: MYSQL.SYNC === 'true',
      charset: 'utf8mb4_unicode_ci',
      logging: false,
      entities: [
        ...schema,
      ]
    }
  }

  connect() {
    return createConnection(this.options);
  }
}
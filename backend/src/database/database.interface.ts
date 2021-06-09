import { Connection } from 'typeorm';

export interface Database {
  connect(): Promise<Connection>;
}
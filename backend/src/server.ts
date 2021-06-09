import { PORT } from '../config';
import http from 'http';
import { Database } from './database/database.interface';
import MySQLDatabase from './database/mysql.database';
import { useContainer } from 'typeorm';
import Container from 'typedi';
import ExpressAppInitializer from './express-app-initializer';

useContainer(Container);

const database: Database = new MySQLDatabase();

database.connect()
  .then(() => {
    console.log('Database sync');

    const expressAppInitializer = new ExpressAppInitializer();
    const app = expressAppInitializer.init();
    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log('Server is running');
    });
  });

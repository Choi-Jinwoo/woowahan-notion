import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { SESSION } from '../config';
import session from 'express-session';
import GooglePassport from './passport';
import useRouter from './routers/use.router';
import APIRouter from './routers/api';
import Container from 'typedi';

export default class ExpressAppInitializer {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  private setMiddleware() {
    const passport = Container.get(GooglePassport).passport;

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/api', useRouter(APIRouter));
    this.app.use(session({
      secret: SESSION.SECRET, resave: true, saveUninitialized: false
    }));
  }

  init(): express.Application {
    this.setMiddleware();

    return this.app;
  }
}
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { SESSION } from '../config';
import session from 'express-session';
import GooglePassport from './passport';
import useRouter from './routers/use.router';
import APIRouter from './routers/api';
import Container from 'typedi';

const app = express()

const passport = Container.get(GooglePassport).passport;

app.use(session({
  secret: SESSION.SECRET, resave: true, saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', useRouter(APIRouter));

export default app;
import { Router } from 'express';
import Container from 'typedi';
import BaseRouter from './base.router';

export default <T extends BaseRouter>(router: new () => T): Router => {
  return Container.get(router).getRouter();
}
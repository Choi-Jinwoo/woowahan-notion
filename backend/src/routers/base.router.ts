import { Router } from 'express';

export default class BaseRouter {
  protected router = Router();

  public getRouter() {
    return this.router;
  }
}
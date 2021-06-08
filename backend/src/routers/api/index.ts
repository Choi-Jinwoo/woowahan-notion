import { Service } from 'typedi';
import BaseRouter from '../base.router';
import useRouter from '../use.router';
import AuthRouter from './auth.router';

@Service()
export default class APIRouter extends BaseRouter {
  constructor() {
    super();

    this.router.use('/auth', useRouter(AuthRouter));
  }
}
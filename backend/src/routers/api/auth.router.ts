import Container, { Service } from 'typedi';
import GooglePassport from '../../passport';
import BaseRouter from '../base.router';

@Service()
export default class AuthRouter extends BaseRouter {
  constructor() {
    super();

    const passport = Container.get(GooglePassport).passport;

    this.router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
    this.router.get('/google/callback', passport.authenticate('google', {
      failureRedirect: '/',
      successRedirect: 'https://www.naver.com'
    }));
  }
}
import { Passport } from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { Service } from 'typedi';
import { GOOGLE } from '../../config';

@Service()
export default class GooglePassport {
  private readonly _passport;

  constructor() {
    this._passport = new Passport();

    this._passport.use(new OAuth2Strategy({
      clientID: GOOGLE.CLIENT_ID,
      clientSecret: GOOGLE.CLIENT_SECRET,
      callbackURL: GOOGLE.CALLBACK_URL,
    }, (_accessToken, _refreshToken, user, done) => {
      return done(null, user);
    }));

    this._passport.deserializeUser<string>((id, done) => {
      done(null, id);
    });

    this._passport.serializeUser<any>((id, done) => {
      done(null, id);
    });
  }

  get passport() {
    return this._passport;
  }
}
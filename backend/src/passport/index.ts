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

    this._passport.serializeUser((user: Express.User, done) => {
      done(null, user.id);
    });

    this._passport.deserializeUser<string>((id, done) => {
      const mockUser = {
        id: 'user',
      };

      done(null, mockUser);
    });
  }

  get passport() {
    return this._passport;
  }
}
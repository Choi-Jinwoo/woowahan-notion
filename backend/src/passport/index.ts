import { Passport } from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { Service } from 'typedi';
import { GOOGLE } from '../../config';
import FindUserService from '../user/core/find-user.service';


@Service()
export default class GooglePassport {
  private readonly _passport;

  constructor(
    private readonly findUserService: FindUserService,
  ) {
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
      findUserService.execute(id)
        .then((user) => {
          if (user === undefined) {
            done('에러', null);
          } else {
            done(null, user);
          }
        })
    });
  }

  get passport() {
    return this._passport;
  }
}
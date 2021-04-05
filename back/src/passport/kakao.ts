import * as passport from 'passport';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import User from '../models/user';
import * as dotenv from 'dotenv';

dotenv.config();

export default () => {
  passport.use(
    'kakao',
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID,
        clientSecret: process.env.KAKAO_CLIENT_SECRET,
        callbackURL: process.env.KAKAO_CALLBACK,
      },
      async (accessToken, refreshToken, profile, done) => {
        const { properties, kakao_account } = profile._json;
        const { nickname, profile_image } = properties;
        const { email: userId } = kakao_account;

        try {
          let user = await User.findOne({ where: { userId } });

          if (!user) {
            user = await User.create({
              userId,
              userNickNm: nickname,
              userProfileUrl: profile_image,
            });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

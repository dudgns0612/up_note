import * as express from 'express';
import * as passport from 'passport';
import * as jsonwebtoken from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import User from '../models/user';

dotenv.config();
const router = express.Router();

router.get('/kakao/login', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return passport.authenticate('kakao', (err, user: User, info) => {
      if (err) {
        return next(err);
      }

      // jwt 토큰 생성
      const token = jsonwebtoken.sign(user.toJSON(), process.env.JWT_SECRET);

      return res.redirect(
        `${process.env.FRONT_URL}/login-callback?successYn=Y&token=${token}&userNo=${user.userNo}`
      );
    })(req, res, next);
  }
);

export default router;

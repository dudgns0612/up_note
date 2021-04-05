import * as express from 'express';
import * as passport from 'passport';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({ test: 'success' });
  }
);

export default router;

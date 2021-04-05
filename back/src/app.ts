import * as express from 'express';
import * as passport from 'passport';
import * as morgan from 'morgan';
import * as cors from 'cors';
import sequelize from '../src/models';
import passportConfig from '../src/passport';

import authRouter from './routes/auth';
import userRouter from './routes/user';
import testRouter from './routes/test';

const app = express();

// sequelize
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('database connect');
  })
  .catch((e: Error) => {
    console.error(e);
  });

// cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// http log
app.use(morgan('dev'));
// passport init
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/auth', authRouter);
app.use('/test', testRouter);
app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('up_note backend express server listening...');
});

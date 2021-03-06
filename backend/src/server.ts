import { ENV } from '@common/enums/app/app';
import { errorsHandler } from '@middlewares/middlewares';
import { healthRouter, authRouter } from '@routes/routes';
import cors from 'cors';
import express from 'express';

// Express server configuration
const app = express();
app
  .use(
    cors({
      // Allow everything for dev env to test from the Postman or other API dev tools
      origin: ENV.APP.NODE_ENV === 'development' ? '*' : ENV.APP.FRONTEND_URL,
    }),
  )
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

const routes = [healthRouter, authRouter];
routes.forEach((route) => app.use(ENV.API.V1_PREFIX, route));

// Handle arbitrary errors that are thrown from any controller above
app.use(errorsHandler);

app.listen(ENV.APP.SERVER_PORT, ENV.APP.SERVER_HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at ${ENV.APP.SERVER_PORT}`);
});

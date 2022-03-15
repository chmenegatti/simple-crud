import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import * as Env from 'dotenv';

import 'express-async-errors';
import { errors } from 'celebrate';

import '@infra/containers';

import '@infra/typeorm/config';
import routes from './routes';
import AppError from '@infra/errors/AppError';

Env.config();

const app = express();

app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        name: err.name,
      });
    }
    return response.status(500).json({
      status: 'error',
      name: err.name,
      message: 'Internal server error',
      erro: err.message,
    });
  }
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

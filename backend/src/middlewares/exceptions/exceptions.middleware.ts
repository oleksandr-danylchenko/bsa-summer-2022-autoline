import httpStatus from 'http-status-codes';

import type { NextFunction, Request, Response } from 'express';

export const errorsHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.error(JSON.stringify(error), error.message);
  if (res.headersSent) {
    return next(error);
  }
  res
    .json({
      error,
      message: error.message,
    })
    .status(httpStatus.BAD_REQUEST);
  return;
};

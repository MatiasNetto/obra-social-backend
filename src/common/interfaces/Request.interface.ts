import { Request } from 'express';

export interface IRequestWithUserId extends Request {
  id?: string;
}

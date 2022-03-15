import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUser = container.resolve(CreateUserService);

    const newUser = await createUser.execute({ name, email });

    return response.json(newUser);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'Hello World' });
  }
}

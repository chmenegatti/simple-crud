import { container } from 'tsyringe';

import IUsersRepository from '@domains/Users/repositories/IUsersRepository';
import UsersRepository from '@domains/Users/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
